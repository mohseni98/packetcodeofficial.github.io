import React from 'react'
import HttpServices from '../../../utils/Http.services'
import { translate } from '../../../utils/useful'
import CustomSelectInput from './CustomSelectInput'

class ListColorsInput extends React.Component {
    state = {
        options: [],
        minLength: 1
    }

    componentDidMount() {
        this.init()
    }

    changeInputValue(value) {
        console.log(value)
        this.props.changeValue(this.props.header.key, value, this.props.extra)

    }


    init(mount) {



        if (this.props.header.information) {
            if (this.props.header.information.type === "local") {

                this.setState({ options: this.props.header.information.items })
            } else if (this.props.header.information.type === "api") {
                this.fetch()
            }

            let minLength = this.props.data?.length
            if (minLength < 1 || !minLength) {
                minLength = 1
            }
            console.log(minLength)
            this.setState({ minLength })
        }

    }



    fetch() {


        let filter = this.props.header.information.filter
        if (this.props.header.information.sort) {
            filter.sort = this.props.header.information.sort
        }

        for (const [key, value] of Object.entries(filter)) {
            if (/\{\{(.*?)\}\}/.test(value)) {

                if (this.props.variables) {
                    filter[key] = this.props.variables[value.replace(/{/g, '').replace(/}/g, '')]
                }
            }
        }

        this.setState({ isLoading: true })
        HttpServices.request(this.props.header.information.address, filter, (fetchResult, fetchError) => {

            if (fetchError) { return }
            var newData = []
            fetchResult.info.forEach(element => {

                var newTitle = this.spliter(element, this.props.header.information.fields.title)
                var newValue = this.spliter(element, this.props.header.information.fields.value)
                var extra = this.spliter(element, this.props.header.information.fields.extra)

                newData.push({ value: newValue, title: newTitle, extra })
            });


            if (this.props.data != null) {
                let found = false

                newData.forEach(element => {
                    if (element.value == this.props.data) {
                        found = true
                    }
                });
            }


            this.setState({
                options: newData,
                isLoading: false
            })

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



    changeValue = (key, value) => {
        let data = this.props.data
        if (!Array.isArray(data)) {
            data = []
        }
        if (!data[key]) {
            data[key] = {}
        }
        data[key].list = [value]
        console.log(value)
        console.log(key)
        console.log(data)

        this.changeInputValue(data)

    }

    getColor(value) {

        let final

        for (let i = 0; i < this.state.options.length; i++) {
            const element = this.state.options[i];
            if (element.value == value) {
                final = element.extra
            }
        }

        return final
    }

    addRow = () => {
        this.setState({ minLength: this.state.minLength + 1 }, () => {
            this.newSelect.focus()
        })
    }



    removeRow = (index) => {
        let data = this.props.data
        data.splice(index, 1)
        this.changeInputValue(data)
        let minLength = this.state.minLength - 1
        if (minLength < 1) {
            minLength = 1
        }
        this.setState({ minLength: minLength })
    }



    render() {
        return (
            <div className="w-full h-full ">

                {Array.isArray(this.props.data) && this.props.data?.map((prop, index) => {
                    if (prop.list)
                        return (
                            <div className='flexcb py-2 w-full' style={{ borderBottom: '1px solid #eee' }}>
                                <div className='flexc w-100'>
                                    <div>
                                        <div className='mrd-2' style={{ border: '1px solid #00000010', height: 20, width: 20, borderRadius: 20, backgroundColor: this.getColor(prop.list) }}>
                                        </div>
                                    </div>
                                </div>
                                <CustomSelectInput changeValue={this.changeValue} data={prop.list[0]} header={{ key: index, information: { type: 'local', items: this.state.options } }} isLoading={this.state.isLoading} />
                                <div>
                                    <button onClick={() => this.removeRow(index)}>
                                        <img src={'/images/icons8-cancel-50.png'} height={18} />
                                    </button>
                                </div>
                            </div>
                        )
                })}

                {(!Array.isArray(this.props.data) || this.props.data.length < this.state.minLength) && (
                    <div className='py-2 w-100'>
                        <CustomSelectInput ref={el => this.newSelect = el} changeValue={this.changeValue} data={null} header={{ key: this.state.minLength - 1, information: { type: 'local', items: this.state.options } }} isLoading={this.state.isLoading} />
                    </div>
                )}

                {(Array.isArray(this.props.data) && this.props.data.length == this.state.minLength) && (
                    <button onClick={() => this.addRow()} className='text-smaller mt-2 mb-1' style={{ color: "#007aff" }}>
                        <p>+ {translate("Add More Available Color")}</p>
                    </button>
                )}
            </div>
        )
    }
}

export default ListColorsInput;