import React from "react";
import Loader from 'react-loader-spinner'
import HttpService from '../../../utils/Http.services';
import { checkTranslation, translate } from "../../../utils/useful";
import { ThreeDots } from 'react-loader-spinner'

class CustomSelectInput extends React.Component {
    state = {
        options: [],
        tempData: [],
        isLoading: false
    }

    componentDidMount() {
        this.init(true)
    }


    componentDidUpdate(prevProps) {

        // console.log(this.props.data)

        if (this.state.options != this.props.header.information.items && this.props.header.information.type === "local") {
            this.setState({ options: this.props.header.information.items, tempData: this.props.header.information.items })
        }
    }

    focus = () => {
        this.open()
    }

    open = () => {
        if (!this.state.open) {
            this.setState({ open: true })
            document.addEventListener('mousedown', this.closeBox);
        }
    }


    close = () => {

        if (this.state.open) {
            this.setState({ open: false })
            document.removeEventListener('mousedown', this.closeBox);

        }
    }

    closeBox = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.open) {
            this.setState({ open: false })
            document.removeEventListener('mousedown', this.closeBox);

        }
    }


    init(mount) {


        // if(!mount){
        //     this.props.changeValue(this.props.header.key, null, this.props.extra) 
        // }
        if (this.props.header.information) {
            if (this.props.header.information.type === "local") {
                this.setState({ options: this.props.header.information.items, tempData: this.props.header.information.items })
            } else if (this.props.header.information.type === "api") {
                this.fetch()
            }
        }

    }



    fetch() {

        // console.log("HERE")
        // console.log(this.props.header.information.filter)
        let filter = this.props.header.information.filter
        if (this.props.header.information.sort) {
            filter.sort = this.props.header.information.sort
        }

        for (const [key, value] of Object.entries(filter)) {
            if (/\{\{(.*?)\}\}/.test(value)) {

                if (this.props.variables) {
                    filter[key] = this.props.variables[value.replace(/{/g, '').replace(/}/g, '')]
                }
                // console.log("VAR")
            }
        }

        // console.log(filter)
        // console.log(this.props.variables)
        this.setState({ isLoading: true })
        HttpService.request(this.props.header.information.address, filter, (fetchResult, fetchError) => {
            if (fetchError) { return }
            // console.log(fetchResult)
            var newData = []
            fetchResult.info.forEach(element => {

                var newTitle = this.spliter(element, this.props.header.information.fields.title)
                var newValue = this.spliter(element, this.props.header.information.fields.value)

                newData.push({ value: newValue, title: newTitle })
            });
            // console.log("NEW DATA")
            // console.log(newData)
            // setTimeout(() => {

            if (this.props.data != null) {
                let found = false
                // console.log(this.props.data)

                newData.forEach(element => {
                    // console.log(element.value)
                    if (element.value == this.props.data) {
                        found = true
                    }

                });

                if (found == false) {
                    // console.log("DWLKFJWLK")
                    // this.props.changeValue(this.props.header.key, null, this.props.extra)
                }

            }


            this.setState({
                options: newData,
                isLoading: false
            })
            // }, 1000);


        })

    }


    spliter(source, string) {
        var stringArray = string.split('.')
        var finalString = source
        stringArray.forEach(element => {
            finalString = finalString[element]
        });
        return finalString
    }


    search = async (value) => {

        // console.log("Search")
        this.setState({ title: value })


        if (value == "") {
            await this.setState({ tempData: this.state.options })
            // await this.setState({ tempData: [] })
        } else {
            // if (this.state.tempData.length == 0) {
            //     await this.setState({ tempData: this.state.options })
            // }
            var values = []

            this.state.options.forEach(element => {
                if (String(element.title).toLowerCase().includes(String(value).toLowerCase())) {
                    values.push(element)
                }
            })

            console.log(values)

            this.setState({ tempData: values })

        }
    }



    changeValue = (value) => {
        this.props.changeValue(this.props.header.key, value, this.props.extra)
        this.close()
        // this.setState({ open: false })
    }

    getTitle = (value) => {
        let header = this.props.header
        let final = header.information.placeholder ?? '{{lang}}Select ...'

        for (let i = 0; i < this.state.options.length; i++) {
            const element = this.state.options[i];
            if (element.value == value) {
                final = element.title
            }
        }

        return checkTranslation(final)
    }

    render() {

        let dataValue = ''
        if (this.props.data) {
            dataValue = typeof this.props.data == "object" ? (this.props.data._id ?? this.props.data.id) : this.props.data
        }

        let isLoading = this.state.isLoading || this.props.isLoading
        // let header = this.props.header
        return (
            <div className='w-100' style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>

                    <p className={"cursor-pointer text-small "+(this.props.data ? '':'placeholder') }onClick={() => this.open()}>{this.getTitle(dataValue)}</p>
                    {this.state.open && (
                        <div ref={ref => this.wrapperRef = ref} className="absolute  left-0  pb-3 px-1 w-100" style={{ top: 25, maxHeight: 200, overflow: 'auto', zIndex: 10, maxWidth: 300, backgroundColor: '#fff', borderRadius: 8, boxShadow: '0px 0px 30px #10101020' }}>

                            <div className="w-100" style={{ backgroundColor: '#fff', position: "sticky", top: 0 }}>
                                <input className='nofocus pb-1 pt-2 px-3 w-100' placeholder={translate('Search ...')} value={this.state.title} onInput={event => this.search(event.target.value)} style={{ borderBottom: '1px solid #eee' }} />
                            </div>

                            <div className="pt-2" value={dataValue} disabled={this.props.disabled || this.props.header.information?.disabled} onChange={e => { this.changeValue(e) }} >
                                {Array.isArray(this.state.tempData) && this.state.tempData.length > 0 && (this.state.tempData.length == this.state.options.length) && (
                                    <p className="cursor-pointer text-small pt-1 pb-1  mt-1 hover-bg px-3" onClick={() => this.changeValue(null)}  >{checkTranslation(this.props.header.information.placeholder ?? 'Select ...')}</p>
                                )}

                                {!(Array.isArray(this.state.tempData) && this.state.tempData.length > 0) && (
                                    <p className="cursor-pointer text-small pt-1 pb-1 hover-bg px-3 mt-3 text-center" onClick={() => this.changeValue(null)}  >{translate('Found Nothing')}</p>
                                )}


                                {Array.isArray(this.state.tempData) && this.state.tempData?.map((prop, index) => {

                                    return (
                                        <p key={index} className="cursor-pointer text-small pt-1 pb-1 hover-bg px-3" onClick={() => this.changeValue(prop.value)} >{checkTranslation(prop.title)}</p>
                                    )
                                })}
                            </div>



                        </div>
                    )}

                    {this.props.header.information?.showInfo && (
                        <p onClick={() => { if (isLoading) { this.props.showInfo(this.props.header.information.filter, this.props.data, this.props.settings.url, this.props.settings.page) } }} style={{ fontSize: 13, color: this.state.isLoading ? '#789' : '#007aff', marginTop: 3, cursor: 'pointer', marginLeft: 3 }}>Show information</p>
                    )}

                    {(isLoading) && (
                        <div style={{ position: 'absolute', top: 0, right: 25 }}>

                            <ThreeDots
                                color={"#000"}
                                width={25}
                                height={20}
                            />
                        </div>
                    )}

                </div>

            </div>
        );
    }
}

export default CustomSelectInput;
