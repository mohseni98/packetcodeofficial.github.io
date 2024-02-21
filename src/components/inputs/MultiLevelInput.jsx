import React from "react";
import HttpServices from "../../../utils/Http.services";
import { checkTranslation, translate } from "../../../utils/useful";
import { ThreeDots } from 'react-loader-spinner'

class MultiLevelInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            data: [],
            title: '',
            tempData: [],
            options: [],
            choosen: [],
            isLoading: false,
            isFinal: false,
        }
    }


    componentDidMount() {
        if (this.props.header.information) {
            if (this.props.data && this.props.data.length > 0) {
            } else {
                this.changeFilter()
            }
        }

        if (this.props.data && this.props.data.length > 0) {

            this.loopInit(-1)
        }
    }


    componentDidUpdate(prevProps) {
        if ((prevProps.data != this.props.data) && (this.state.choosen.length != this.props.data.length)) {
            if (this.props.data.length > 0) {
                this.loopInit(-1)
            }
        }
    }



    toggleOpen = (makeOpen) => {

        let final = makeOpen != null ? makeOpen : !this.state.isOpen
        if (final != this.state.isOpen) {
            if (!this.state.isOpen) {
                document.addEventListener('mousedown', this.closeBox);
            } else {
                document.removeEventListener('mousedown', this.closeBox);

            }
        }


        this.setState({ isOpen: final, data: this.props.data }, () => {
        })

    }

    closeBox = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isOpen) {
            this.setState({ isOpen: false, data: this.props.data })
            document.removeEventListener('mousedown', this.closeBox);
            if (this.refs.icon)
                this.refs.icon.classList.toggle("rotate-180")

        }
    }


    changeItem = (prop, selected, dontChangeValue) => {
        var choosen = [...this.state.choosen]
        this.setState({ title: '' }, () => {
            if (this.refs.input)
                this.refs.input.focus()
        })


        if (selected) {
            for (let i = 0; i < choosen.length; i++) {
                if (choosen[i] == prop.title) {
                    choosen.splice(i, 1)
                }
            }
        } else {
            let tempProp = prop
            let found = false
            for (let i = 0; i < choosen.length; i++) {
                const element = choosen[i];
                if (tempProp?.value == element?.value) {
                    found = true
                }
            }
            if (!found) {
                choosen.push(tempProp)
            }
        }
        this.setState({ choosen }, () => {
            if (!dontChangeValue) this.changeValue()
        })

        setTimeout(
            function () {
                this.toggleOpen(true)
            }.bind(this),
            1
        );


        if (this.state.tempData.length > 0)
            this.setState({ options: this.state.tempData })

        this.changeFilter(prop.value)

    }

    loopInit = (count) => {

        if (count < this.props.data.length || !this.props.data) {
            let refFilter = this.props.data[count]
            if (typeof refFilter == "object") {
                refFilter = refFilter._id
            }
            this.changeFilter(refFilter, (result) => {
                if (result != -1) {
                    result.forEach((element, index) => {
                        let tempData = this.props.data[count + 1]
                        if (typeof tempData == "object") {
                            tempData = tempData._id
                        }

                        if (element.value == tempData) {
                            this.changeItem(element, false, true)
                        }
                    });
                    this.loopInit(count + 1)
                }
            }, true)
        }

    }


    changeFilter(refValue, cb, init) {
        if (this.props.header.information && this.props.header.information.filter) {
            let newFilter = this.props.header.information.filter
            newFilter[this.props.header.information.reference] = refValue ? refValue : this.props.header.information.root
            this.fetch(newFilter, cb ? cb : null, init)
        }
    }



    fetch(filter, cb, init) {
        this.setState({ options: [] })
        this.setState({ isLoading: true })

        let address = this.props.header.information.address
        HttpServices.request(address, { filter: filter }, (fetchResult, fetchError) => {
            if (fetchError) { return }
            var newData = []
            if (fetchResult.info.length > 0) {
                fetchResult.info.forEach(element => {

                    var newTitle = this.spliter(element, this.props.header.information.fields.title)
                    var newValue = this.spliter(element, this.props.header.information.fields.value)

                    newData.push({ value: newValue, title: newTitle })
                });
                this.setState({
                    options: newData,
                    tempData: newData,
                    isLoading: false
                })
                if (cb) {
                    cb(newData)
                }
            } else {

                if (this.state.choosen.length > 0) {
                    this.setState({ isFinal: true }, () => {
                        if (!init) {
                            this.changeValue()
                        }
                        this.toggleOpen(false)
                    })
                }
                this.setState({
                    isLoading: false
                }, () => {

                    if (cb) {

                        cb(-1)
                    } else {
                    }
                })
            }
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
            this.toggleOpen(true)
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
                if (element.title.toLowerCase().includes(value.toLowerCase())) {
                    values.push(element)
                }
            })

            this.setState({ options: values })

        }
    }


    removeItem(index) {
        let newChoosen = [...this.state.choosen]
        newChoosen.splice(index, this.state.choosen.length - index)
        this.setState({ choosen: newChoosen, isFinal: false }, () => {
            this.changeFilter(this.state.choosen.length ? this.state.choosen[this.state.choosen.length - 1].value : this.props.header.information.root)
            this.changeValue(this.props.updateAfterSelect ? false : true)

        })
        this.toggleOpen()
    }


    changeValue(empty) {
        let choosen = []
        if (!empty || !this.props.updateAfterSelect) {
            this.state.choosen.forEach(element => {
                choosen.push(element.value)
            });
        }
        this.props.changeValue(this.props.header.key, choosen, { isFinal: this.state.isFinal })
    }


    render() {

        return (
            <div className=' relative w-full' >
                {(!this.state.choosen || this.state.choosen.length == 0) && (
                    <p className="text-sm absolute px-1 mt-1 text-egray-600 font-light outline-none border-none pointer-events-none top bg-transparent" >{checkTranslation(this.props.header.information.placeholder ?? 'Select ...')}</p>
                )}


                <div ref={ref => this.wrapperRef = ref} >
                    <div onClick={() => { if (this.refs.input) this.refs.input.focus() }} className="flex-wrap cursor-pointer flex bg-transparent items-center" >

                        {this.state.choosen.map((prop, index) => {
                            return (
                                <div className="inline-flex items-center py-1">
                                    <div key={index} className="flexcc px-3 py-1 bg-blue-100 transition-all hover:bg-blue-600 whitespace-nowrap  rounded-md text-egray-900 hover:text-white">
                                        <p >{prop.title}</p>
                                        <div onClick={() => this.removeItem(index)} className="p-1 flexcc" >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                    {index != this.state.choosen.length - 1 && (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-egray-950 mx-[2px]">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    )}
                                </div>
                            )
                        })}
                        <div className={"position-relative mt-0 ml-1 "}>
                            {!this.state.isFinal && (
                                <input ref={'input'} value={this.state.title} onFocus={() => this.toggleOpen(true)} onInput={event => this.search(event.target.value)} className='outline-none' style={{ backgroundColor: 'transparent', minWidth: 100, width: this.state.title.length * 9, border: 'none' }} />
                            )}
                            {this.state.isLoading && (
                                <div style={{ position: 'absolute', top: 1, right: 5 }}>
                                    <ThreeDots
                                        color={"#000"}
                                        width={25}
                                        height={20}
                                    />
                                </div>
                            )}
                        </div>
                        {this.state.isFinal && (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        )}

                    </div>

                    {this.state.isOpen && (
                        <div className="flex absolute w-full z-40">
                            <div className={'min-w-[200px] bg-white rounded-xl shadow-20 p-1'} >
                                <div className={'search-drop-down flex flex-col sc-1 rounded-xl overflow-auto max-h-64'} >
                                    {this.props.isSearchable && (<input changeValue={event => this.search(event.target.value)} placeholder={"جست و جو ..."} style={{ fontSize: 13, textAlign: 'center', direction: 'rtl', alignSelf: 'stratch', padding: 5, margin: 5, height: 35, backgroundColor: '#f7f7f7', borderRadius: 4, borderWidth: 1, borderStyle: 'solid', borderColor: '#eee', marginTop: 5 }} className={'mediumiransansfont'} />)}

                                    {this.state.options.map((prop, index) => {
                                        let selected = false
                                        for (var i = 0; i < this.state.choosen.length; i++) {

                                            if (prop.title == this.state.choosen[i])
                                                selected = true
                                        }
                                        return (
                                            <div key={index} onClick={() => this.changeItem(prop, selected, this.props.header.information?.updateAfterSelect ? false : true)} className={"text-egray-950 my-1 py-2 px-3 rounded-lg " + (selected ? 'bg-blue-600 hover:bg-blue-500' : 'bg-egray-50 hover:bg-egray-100')}>
                                                <p className="">{prop.title}</p>
                                            </div>
                                        )
                                    })}

                                    {this.state.options.length == 0 && !this.state.isLoading && (
                                        <div style={{ cursor: 'pointer', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#eee', borderBottomStyle: 'solid', borderBottomWidth: 1 }}>
                                            <p style={{ textAlign: 'center', margin: 0, color: '#000', opacity: 0.5, fontSize: 13 }}>{translate("Found Nothing")}</p>
                                        </div>
                                    )}

                                    {this.state.options.length == 0 && this.state.isLoading && (
                                        <div style={{ cursor: 'pointer', padding: 5, paddingTop: 10, paddingBottom: 10, borderBottomColor: '#eee', borderBottomStyle: 'solid', borderBottomWidth: 1 }}>
                                            <p style={{ textAlign: 'center', margin: 0, color: '#000', opacity: 0.5, fontSize: 13 }}>{translate("Loading ...")}</p>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    )}

                </div>



            </div>
        );
    }
}


export default MultiLevelInput;
