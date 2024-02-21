import React from "react";
import { ThreeDots } from "react-loader-spinner";
import HttpServices from "../../../utils/Http.services";
import { getObject, translate } from "../../../utils/useful";
import CustomSelectInput from "./CustomSelectInput";
import NumberInput from "./NumberInput";
import TextInput from "./TextInput";


class AttributesLoader extends React.Component {
    state = {
        options: [],
        isLoading: false,
        value: {}
    }

    componentDidMount() {
        if (this.props.data) {
            this.setState({ value: this.props.data })
        }
        this.mounted = true
        this.init()
    }

    componentWillUnmount() {
        this.mounted = false
    }


    componentDidUpdate(prevProps) {
        if (this.props.header.information.refValue != this.props.header.information.refValue) {
            this.init()
        }

        if (prevProps.data != this.props.data && this.mounted) {
            this.setState({ value: this.props.data })
        }
    }


    init() {
        if (this.props.header?.information && this.mounted) {
            if (this.props.header.information.type == "local") {
                this.setState({ options: this.props.header.information.items })
            } else if (this.props.header.information.type == "api") {
                this.setState({ options: [] }, (
                    this.fetch()
                ))
            }
        }
    }


    makeFilter() {

        let filter = this.props.header.information.filter
        let refValue = this.props.header.information.refValue
        filter[this.props.header.information.refKey] = refValue[refValue.length - 1]
        return filter
    }


    fetch() {
        console.log("fetch")
        console.log(this.props.header.information.refValue)
        if (this.props.header.information.refValue) {
            let filter = this.makeFilter()
            console.log(filter)
            console.log(this.props.header.information.address)
            this.setState({ isLoading: true })

            if (filter["categories"]) {


                HttpServices.request(this.props.header.information.address, { filter: filter }, (data, fetchError) => {

                    this.setState({ isLoading: false })
                    if (fetchError) { return }
                    if (this.mounted) {
                        var newData = []
                        data.info.forEach(element => {
                            newData.push(element)
                        })


                        if (this.props.data && Array.isArray(newData)) {
                            for (const [key, value] of Object.entries(this.props.data)) {
                                let found = false
                                for (let i = 0; i < newData.length; i++) {
                                    const element = newData[i];
                                    if (key == element._id) {
                                        found = true
                                    }
                                }
                            }
                        }

                        if (this.mounted) {
                            this.setState({
                                options: newData,
                                isLoading: false
                            })
                        }
                    }

                })
            }
        }
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

    changeValue = (key, value, extra) => {
        let newValue = this.state.value

        if (!newValue) {
            newValue = {}
        }
        newValue[key] = value
        this.state.value = newValue

        if (extra == 'remove') {
            delete newValue[key]
        }


        console.log("changeValue")
        console.log(newValue)
        this.props.changeValue(this.props.header.key, newValue, this.props.extra)

    }


    render() {
        return (
            <div className="w-full">
                <div className="grid grid-cols-2 gap-4">
                    {this.state.options.map((prop, index) => {
                        let settings = prop.settings ? prop.settings : {}
                        if (this.props.data && this.props.data[prop._id] == null) {
                            this.changeValue(prop._id, '')
                        }
                        settings.label = prop.title + (prop.suffix ? ' (' + prop.suffix + ')' : '')
                        let items = []
                        if (prop.type == "select" && prop.options) {
                            prop.options.forEach(element => {
                                items.push({ value: element.label, title: element.label })
                            });
                            settings.type = 'local'
                            settings.items = items
                        }


                        return (
                            <div key={index} className='mb-2 col-span-2 md:col-span-1 pt-2 relative'>

                                {prop && (
                                    <div className="">
                                        <div className="mb-2">
                                            <label style={{ color: '#000' }} className={'  text-smaller mr-1 ml-1  ' + (settings?.required ? 'required' : '')}>{settings.label}</label>
                                        </div>

                                        {prop.type == "text" || prop.type == null && (
                                            <div className="flexc modern-input">
                                                <TextInput data={this.props.data ? this.props.data[prop._id] : null} header={{ key: prop._id, information: settings }} changeValue={this.changeValue} />
                                            </div>
                                        )}


                                        {prop.type == "select" && (
                                            <div className="flexc modern-input">
                                                <CustomSelectInput data={this.props.data ? this.props.data[prop._id] : null} header={{ key: prop._id, information: settings }} changeValue={this.changeValue} />
                                            </div>
                                        )}

                                        {(prop.type == "Number" || prop.type == "number") && (
                                            <div className="flexc modern-input">
                                                <NumberInput data={this.props.data ? this.props.data[prop._id] : null} header={{ key: prop._id, information: settings }} changeValue={this.changeValue} />
                                            </div>
                                        )}


                                    </div>
                                )}
                            </div>
                        )
                    })}

                    {this.state.options?.length == 0 && !this.state.isLoading && (
                        <div className="py-3 px-2 flexcc w-full">
                            <p className="text-small opacity-5">{translate("No Specifications")}</p>
                        </div>
                    )}

                    {this.state.isLoading && (
                        <div className="flexcc">
                            <ThreeDots
                                type={this.props.type ?? "Oval"}
                                color={"#000"}
                                height={50}
                                width={50}
                            />
                        </div>

                    )}

                </div>
            </div>
        );
    }
}

export default AttributesLoader;
