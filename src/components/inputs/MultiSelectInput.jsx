import React from "react";
import Loader from 'react-loader-spinner'
import HttpService from '../../../utils/Http.services';
import { checkTextTranslation, translate, getBoundingClientRect } from "../../../utils/useful";


class MultiSelectInput extends React.Component {

    state = {
        isOpen: false,
        data: [],
        title: '',
        tempData: [],
        options: [],
        isLoading: false,
        choosen: [],
        lastNewId: 0

    }



    componentDidMount() {
        this.mounted = true
        this.init()

    }

    componentDidUpdate(prevProps) {
        if (prevProps.data != this.props.data && this.mounted) {
        }

        if (this.state.options != this.props.header.information.items && this.props.header.information.type === "local") {
            let choosen = []

            if (this.props.data && Array.isArray(this.props.data)) {
                this.props.data.forEach(element => {
                    choosen.push({ title: element, value: element })
                });
            }
            this.setState({ options: this.props.header.information.items, choosen })
        }
    }

    componentWillUnmount() {
        this.mounted = false
    }


    init() {
        if (this.props.header.information) {
            if (this.props.header.information.type == "local") {

                let options = []
                let choosen = []

                if (this.props.header.information.items && this.props.header.information.items.length > 0) {
                    options = this.props.header.information.items
                }

                if (this.props.data && Array.isArray(this.props.data)) {
                    this.props.data.forEach(element => {
                        choosen.push({ title: element, value: element })
                    });
                }
                this.setState({ options, choosen })
            } else if (this.props.header.information.type == "api") {
                this.fetch()
            }
        }
    }



    toggleOpen = (open) => {
        let openState = open != null ? open : !this.state.isOpen

        if (openState) {
            document.addEventListener('mousedown', this.closeBox);
            window.addEventListener('scroll', this.getPosition, true);
            this.getPosition()

        } else {
            document.removeEventListener('mousedown', this.closeBox);
            window.removeEventListener('scroll', this.getPosition);

        }
        this.setState({ isOpen: openState, data: this.props.data })

    }

    closeBox = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isOpen) {
            this.setState({ isOpen: false, data: this.props.data })
            document.removeEventListener('mousedown', this.closeBox);
            window.removeEventListener('scroll', this.getPosition);
        }
    }


    getPosition = () => {
        let rect = getBoundingClientRect(this.wrapperRef)
        this.setState({ top: rect.top + 35, left: rect.left - 0 })
    }


    changeItem = (prop, selected, dontChangeValue) => {
        var choosen = this.state.choosen
        this.setState({ title: '' }, () => {
            if (this.refs.input)
                this.refs.input.focus()
        })


        if (selected) {
            for (let i = 0; i < choosen.length; i++) {

                if (choosen[i].value == prop.value) {
                    choosen.splice(i, 1)
                }
            }
        } else {
            choosen.push(prop)
        }

        this.setState({ choosen }, () => {
            if (!dontChangeValue) this.changeValue()
        })

        setTimeout(() => {
            this.toggleOpen(true)
        }, 1);



        if (this.state.tempData.length > 0)
            this.setState({ options: this.state.tempData })
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }



    fetch() {
        this.setState({ isLoading: true })
        let address = this.props.header.information.address
        let filter = typeof this.props.header.information.filter == "string" ? JSON.parse(this.props.header.information.filter) : this.props.header.information.filter

        for (const [key, value] of Object.entries(filter)) {
            if (/\{\{(.*?)\}\}/.test(value)) {
                if (this.props.variables) {
                    filter[key] = this.props.variables[value.replace(/{/g, '').replace(/}/g, '')]
                }
            }
        }

        HttpService.request(address, filter, (fetchResult, fetchError) => {
            console.log(fetchError)
            if (fetchError) { return }

            console.log(fetchResult)
            var newData = []
            fetchResult.info.forEach(element => {

                var newTitle = this.spliter(element, this.props.header.information.fields.title)
                var newValue = this.spliter(element, this.props.header.information.fields.value)

                newData.push({ value: newValue, title: newTitle })
            });

            if (Array.isArray(this.props.data)) {
                let choosen = []
                this.props.data.forEach(oneTitle => {
                    let oneTitleId = typeof oneTitle == 'object' ? oneTitle._id : oneTitle
                    newData.forEach(oneNewData => {

                        if (oneNewData.value == oneTitleId) {
                            choosen.push({ title: oneNewData.title, value: oneTitleId })
                        }
                    });

                })
                this.setState({ choosen })

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


    conditionalSettings(param, condition) {
        if (this.props.settings) {
            if (this.props.settings[param] == condition) {
                return true
            }
        }
        return false
    }


    search = async (value) => {

        this.setState({ title: value })
        if (!this.state.isOpen) {
            this.toggleOpen()
        }

        if (value == "") {
            await this.setState({ options: this.state.tempData })
            await this.setState({ tempData: [] })
        } else {
            if (this.state.tempData.length == 0) {
                await this.setState({ tempData: this.state.options })
            }
            var values = []
            this.state.tempData.forEach(element => {
                if (String(element.title).toLowerCase().includes(String(value).toLowerCase())) {
                    values.push(element)
                }
            })

            this.setState({ options: values })

        }
    }


    removeItem(index) {
        let choosen = [...this.state.choosen]
        choosen.splice(index, 1)
        this.setState({ choosen }, () => {
            this.changeValue()
        })
    }


    addTag() {
        let tempData = [...this.state.tempData]
        let choosen = [...this.state.choosen]

        let item = { title: this.state.title, value: this.state.title }
        tempData.push(item)
        this.setState({ tempData }, () => {
            this.changeItem(item, false)
        })
        this.refs.input.focus()
    }

    changeValue() {
        let choosen = []
        this.state.choosen.forEach(element => {
            choosen.push((typeof element.value == 'object' ? element.value._id : element.value))

        });
        this.props.changeValue(this.props.header.key, choosen, this.props.extra)
    }


    render() {

        return (
            <div ref={ref => this.setWrapperRef(ref)} className='mt-0 w-full relative flex-1 flexc' onClick={() => this.toggleOpen(true)} >

                {this.props.header.information.placeholder && !this.state.choosen?.length && (
                    <div className="h-full flexc" >
                        <label className={'text-sm text-egray-600 font-light whitespace-nowrap'}>{checkTextTranslation(this.props.header.information.placeholder)}</label>
                    </div>
                )}

                <div className="w-full"  >
                    <div className="flex-wrap rounded-lg cursor-pointer flexc">
                        {this.state.choosen.map((prop, index) => {
                            return (
                                <div className="flexcc px-3 py-1 bg-blue-100 transition-all hover:bg-blue-600 whitespace-nowrap me-3 rounded-md text-egray-900 hover:text-white" key={index}>
                                    <p className=" me-2">{prop.title}</p>
                                    <button onClick={() => this.removeItem(index)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )
                        })}
                        {this.state.isLoading && (
                            <div style={{ position: 'absolute', top: 7, right: 5 }}>
                                <Loader
                                    type="Oval"
                                    color="rgba(0,122,255,1)"
                                    height="20"
                                    width="20"
                                />
                            </div>
                        )}
                        {this.state.isFinal && (<i className="fa fa-check-circle ml-1" style={{ color: '#78b2d0', fontSize: 20 }}></i>)}
                    </div>

                    {this.state.isOpen && (
                        <div className="flex fixed min-w-[140px] z-40" style={{ top: this.state.top, left: this.state.left }}>
                            <div className='flex flex-col w-full max-h-64 p-2 bg-white shadow-20 rounded-xl overflow-auto sc-1'>
                                {this.props.header.information.isSearchable && (
                                    <input onChange={event => this.search(event.target.value)} placeholder={translate("placeholders.search")} className='text-start border border-egray-100 rounded-md bg-egray-50 h-8 p-2 m-1 text-sm' />
                                )}

                                {this.state.options.map((prop, index) => {
                                    let selected = false
                                    for (var i = 0; i < this.state.choosen.length; i++) {

                                        if (prop.value == this.state.choosen[i].value)
                                            selected = true
                                    }

                                    return (
                                        <div key={index} onClick={() => this.changeItem(prop, selected)} className={"cursor-pointer flexc px-2 py-2 flexc my-1 rounded-md transition-all " + (selected ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-egray-50 text-egray-800 hover:bg-egray-100')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"w-5 h-5  " + (selected ? '' : 'opacity-10')}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-center ms-2">{prop.title}</p>
                                        </div>
                                    )
                                })}

                                {this.state.options.length == 0 && (
                                    <div style={{ cursor: 'pointer', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#eee', borderBottomStyle: 'solid', borderBottomWidth: 1 }}>
                                        <p style={{ textAlign: 'center', margin: 0, color: '#000', opacity: 0.5, fontSize: 13 }}>{translate("useful.foundNothing")}</p>
                                        {this.props.header.information.tag && this.state.title != '' && (<p onClick={() => this.addTag()} style={{ textAlign: 'center', margin: 0, color: '#007aff', fontSize: 13, marginTop: 5, marginBottom: 5, cursor: 'pointer' }}>+ ADD THIS</p>)}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}


export default MultiSelectInput;
