import React from 'react'
import HttpServices from '../../../utils/Http.services'
import { checkTextTranslation, translate } from '../../../utils/useful'
import CustomSelectInput from './CustomSelectInput'
import MultiSelectInput from './MultiSelectInput'

class SizesInput extends React.Component {
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
            }, () => {
                if (this.props.data) {

                    this.changeValue(null, this.props.data?.type, null, true)
                }

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



    changeValue = (key, value, extra, init) => {

        console.log("changeValue")
        let currentItem
        let subOptions

        if (value) {
            for (let i = 0; i < this.state.options.length; i++) {
                const element = this.state.options[i];
                if (element.value == value) {
                    currentItem = { type: element.value }
                    subOptions = []
                    element.extra?.forEach(element => {
                        subOptions.push({ title: element.size, value: element.size })
                    });
                }
            }
        }

        if (!init) {
            this.changeInputValue(null)
        }


        console.log("subOptions")
        console.log(subOptions)
        console.log(value)
        console.log(this.props.data)


        this.setState({ currentItem, subOptions })

    }


    changeSubvalue = (key, value) => {
        let data = this.props.data ?? {}
        data.options = value
        data.type = this.state.currentItem?.type

        this.changeInputValue(data)

    }



    render() {
        let subOptions = []


        return (
            <div className="w-100 h-100 ">

                <div className='py-2 w-100'>
                    <p className='text-small mb-1'>{translate("Type")}</p>
                    <CustomSelectInput ref={el => this.newSelect = el} changeValue={this.changeValue} data={this.state.currentItem?.type} header={{ key: 'main', information: { type: 'local', items: this.state.options } }} isLoading={this.state.isLoading} />
                </div>


                {this.state.subOptions && (
                    <div className='pb-2 pt-1 w-100'>
                        <p className='text-small mb-1'>{translate("Sizes")}</p>
                        <MultiSelectInput ref={el => this.newSelect = el} changeValue={this.changeSubvalue} data={this.props.data?.options} header={{ key: 'sub', information: { type: 'local', items: this.state.subOptions, placeholder: translate("Select ...") } }} isLoading={this.state.isLoading} />
                    </div>
                )}


            </div>
        )
    }
}

export default SizesInput;