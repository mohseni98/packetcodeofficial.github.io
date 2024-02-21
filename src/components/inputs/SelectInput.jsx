import React from "react";
import Loader from 'react-loader-spinner'
import HttpService from '../../../utils/Http.services';
import { checkTranslation } from "../../../utils/useful";
import { ThreeDots } from 'react-loader-spinner'

class SelectInput extends React.Component {
    state = {
        options: [],
        isLoading: false
    }

    componentDidMount() {
        this.init(true)
    }


    componentDidUpdate(prevProps) {
        if (this.state.options != this.props.header.information.items && this.props.header.information.type === "local") {
            this.setState({ options: this.props.header.information.items })
        }
    }

    focus = () => {
        if (this.select) {
            this.select.focus()
        }
    }

    init(mount) {

        if (this.props.header.information) {
            if (this.props.header.information.type === "local") {
                this.setState({ options: this.props.header.information.items })
            } else if (this.props.header.information.type === "api") {
                this.fetch()
            }
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
        HttpService.request(this.props.header.information.address, filter, (fetchResult, fetchError) => {
            if (fetchError) { return }
            var newData = []
            fetchResult.info.forEach(element => {

                var newTitle = this.spliter(element, this.props.header.information.fields.title)
                var newValue = this.spliter(element, this.props.header.information.fields.value)

                newData.push({ value: newValue, title: newTitle })
            });
            if (this.props.data != null) {
                let found = false

                newData.forEach(element => {
                    if (element.value == this.props.data) {
                        found = true
                    }

                });

                if (found == false) {

                }

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
            if (this.props.settings[param] === condition) {
                return true
            }
        }
        return false
    }


    changeValue = (e) => {
        this.props.changeValue(this.props.header.key, e.target.value, this.props.extra)
    }


    render() {

        let dataValue = ''
        if (this.props.data) {
            dataValue = typeof this.props.data == "object" ? (this.props.data._id ?? this.props.data.id) : this.props.data
        }

        return (
            <div className='w-100' style={{ position: 'relative' }}>
                <div style={{ position: 'relative' }}>
                    <select ref={el => this.select = el} value={dataValue} disabled={this.props.disabled || this.props.header.information?.disabled} onChange={e => { this.changeValue(e) }} className='text-xs text-egray-600 font-light outline-none w-full ' style={{  }}>
                        <option disabled={this.props.header.information.required ? true : false} hidden={this.props.header.information.required ? true : false} value="">{checkTranslation(this.props.header.information.placeholder ?? 'Select ...')}</option>
                        {Array.isArray(this.state.options) && this.state.options?.map((prop, index) => {

                            return (
                                <option key={index} value={prop.value} className="text-egray-900 text-base">{checkTranslation(prop.title)}</option>
                            )
                        })}
                    </select>

                    {this.conditionalSettings('showInfo', true) && (
                        <p onClick={() => { if (!this.state.isLoading) { this.props.showInfo(this.props.header.information.filter, this.props.data, this.props.settings.url, this.props.settings.page) } }} style={{ fontSize: 13, color: this.state.isLoading ? '#789' : '#007aff', marginTop: 3, cursor: 'pointer', marginLeft: 3 }}>Show information</p>
                    )}

                    {this.state.isLoading && (
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

export default SelectInput;
