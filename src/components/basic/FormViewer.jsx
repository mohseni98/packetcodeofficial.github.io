import React from 'react'
import inputComponents from './inputComponents'
import { checkTextTranslation, getObject, setObject } from '../../../utils/useful'

class FormViewer extends React.Component {
    state = {
        errors: {},
        data: {},
        valid: {},
        dependencies: {},
        headers: [],
        width: 1000
    }

    componentDidMount() {

        this.init()
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', this.setFormWidth);
            this.setState({ width: window.innerWidth })
        }
    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.setFormWidth)
        }
    }

    componentDidUpdate(prevProps) {

        if ((this.props.initData !== prevProps.initData) || (this.props.headers !== prevProps.headers)) {

            this.init()
        }
    }



    checkDependencies = () => {
        if (this.state.headers) {
            this.state.headers?.forEach(header => {
                let hasDependency = (header.dependencies && header.dependencies.length > 0)
                if (hasDependency) {
                    let dependencies = this.state.dependencies
                    header.dependencies?.forEach(dependency => {
                        let newDependency = JSON.parse(JSON.stringify(dependency))
                        newDependency.target = header.key

                        if (!dependencies[dependency.refKey]) {
                            dependencies[dependency.refKey] = []
                        }

                        dependencies[dependency.refKey].push(newDependency)
                        this.state.dependencies = dependencies

                    })
                }
            })
            if (this.state.data) {
                this.state.headers?.forEach(prop => {
                    this.changeDependency(prop.key, this.state.data[prop.key], true)
                })
                this.changeDependency('*', null, true)

            }
        }
    }



    changeDependency(key, value, init) {
        let dependencies = this.state.dependencies
        if (dependencies[key]) {
            dependencies[key]?.forEach(dependency => {
                let conditions = dependency.conditions
                let variables = { data: this.state.data }
                let result = this.checkConditionGroup(conditions.root, variables)
                let headers = this.state.headers
                if (dependency.show != null) {
                    headers?.forEach(header => {
                        if (dependency.targetKey == header.key) {
                            header.hideComponent = !result
                        }
                    });
                    this.setState({ headers })
                }

                if (dependency.changeValue != null) {
                    let data = this.state.data

                    let dependencyResult = true
                    if (dependency.changeValue.conditions) {
                        dependencyResult = this.checkConditionGroup(dependency.changeValue.conditions.root, variables)
                    }

                    if (dependencyResult) {
                        data[dependency.changeValue.targetKey] = dependency.changeValue.refKey ? data[dependency.changeValue.refKey] : dependency.changeValue.value
                        this.setState({ data })
                    }
                }


                if (dependency.changeHeader != null) {
                    headers?.forEach(header => {
                        if (dependency.targetKey == header.key) {
                            let newValue = this.checkValueForVariables(dependency.changeHeader.value, variables)
                            if (dependency.changeHeader?.converts) {
                                newValue = this.convertObject(newValue, dependency.changeHeader?.converts)
                            }
                            setObject(header, dependency.changeHeader.key, newValue)
                        }
                    })
                    this.setState({ headers })
                }



                if (dependency.init != null) {
                    if (this["component-" + dependency.targetKey] && this["component-" + dependency.targetKey].init) {
                        this["component-" + dependency.targetKey].init()
                    }
                }





            });

            this.setState({ dependencies })

        }
    }


    convertObject = (object, convert) => {
        let newObject

        if (Array.isArray(object)) {

            newObject = []
            object?.forEach(oneInArray => {
                let tempNewObject = this.convertOneOfObject(oneInArray, convert)
                newObject.push(tempNewObject)
            });
        } else {
            newObject = this.convertOneOfObject(object, convert)
        }
        return newObject

    }

    convertOneOfObject(object, convert) {
        let newObject = { ...object }
        convert?.forEach(oneConvert => {
            newObject[oneConvert.targetKey] = newObject[oneConvert.valueKey]
        })
        return newObject
    }


    checkConditionGroup = (group, variables) => {
        let result = false
        if (group.action && group.action == 'and') {
            result = true
        }
        for (const [key, value] of Object.entries(group.conditions)) {
            if (this.checkOneCondition(value, variables) != result) {
                return !result
            }
        }

        return result
    }




    checkOneCondition = (condition, variables) => {
        let action = condition.action
        if (action) {
            return this.checkConditionGroup(condition, variables)
        } else {
            let source = this.checkValueForVariables(condition.source.value, variables)
            let operator = condition.operator.value
            let target = this.checkValueForVariables(condition.target.value, variables)

            return this.checkOperator(source, operator, target)

        }
    }


    checkOperator(v1, operator, v2) {

        switch (operator) {
            case '==':
                return (v1 == v2)
            case '===':
                return (v1 === v2)
            case '!=':
                return (v1 != v2)
            case '!==':
                return (v1 !== v2)
            case '<':
                return (Number(v1) < Number(v2))
            case '<=':
                return (Number(v1) <= Number(v2))
            case '>':
                return (Number(v1) > Number(v2))
            case '>=':
                return (Number(v1) >= Number(v2))
            case '&&':
                return (v1 && v2)
            case '||':
                return (v1 || v2)
            default:
                return false
        }
    }


    checkValueForVariables = (value, variables) => {
        let newValue = value

        if (typeof newValue == "string") {
            newValue = value.split(' ')

            for (let i = 0; i < newValue.length; i++) {
                const element = newValue[i]
                if (element.startsWith('@')) {
                    newValue[i] = this.getValueOfVariable(element, variables)
                }
            }
            if (newValue.length > 1) {
                newValue = newValue.join(' ')
            } else {
                newValue = newValue[0]
            }
        }

        return newValue

    }

    getValueOfVariable(element, variables) {
        let key = element.substring(1)
        key = key.split('.')
        let variableSource = key[0]
        key.splice(0, 1)
        key = key.join('.')

        return getObject(variables[variableSource], key)
    }



    getForm = () => {
        if (this.validator(this.state.headers, this.state.data).valid) {
            return this.state.data ? this.state.data : {}
        } else {
            return null
        }
    }



    init = () => {
        if (this.props.headers) {
            let headers = JSON.parse(JSON.stringify(this.props.headers))
            this.setState({ headers }, () => {
                this.makeInitValue(this.props.initData)

            })
        }
    }


    validator(headers, data) {
        let valid = true
        let errors = {}
        headers?.forEach(header => {

            let value = getObject(data, header.key)


            if (header.information?.required) {


                if (header.type == 'ImageInput' || header.type == 'FileInput' || header.type == 'ImageProfileInput') {

                    if (!value || value === '') {
                        value = getObject(data, ('**files.' + header.key), 1)
                    }
                    if (!value || value === '') {
                        valid = false
                        errors[header.key] = '{{lang}}errors.required-field'
                    }
                } else {
                    if (value == null || value === '') {
                        valid = false
                        errors[header.key] = '{{lang}}errors.required-field'
                    }
                }

                if (header.type == 'PhoneInput') {
                    if (!value || value.length < 14) {
                        valid = false
                        errors[header.key] = '{{lang}}errors.required-field'
                    }
                }

                if (header.type == 'SubformInput') {
                    if (!value || value.length < 1) {
                        valid = false
                        errors[header.key] = '{{lang}}errors.required-field'
                    } else {
                        value?.forEach(subValue => {
                            let validator = this.validator(header.information.headers, subValue)
                            if (!validator.valid) {
                                valid = false
                                errors[header.key] = '{{lang}}errors.required-field'
                            }
                        });
                    }
                }


            }
        })

        this.setState({ errors })
        return { valid, errors }
    }




    makeInitValue(rawData) {
        let data = rawData
        if (data == null) {
            data = {}
        }
        let isEditing = true
        if (Object.keys(data).length == 0) {
            isEditing = false
        }

        if (this.props.isEditing != null) {
            isEditing = this.props.isEditing
        }



        if (!isEditing && this.state.headers) {

            this.state.headers.forEach(header => {

                if (data[header.key] == null && header.information?.default != null) {
                    setObject(data, header.key, header.information?.default)
                }
            });
        }
        this.setState({ data: data, show: true }, () => {
            this.setFormWidth()
            this.checkDependencies()
            if (this.props.liveChange) {
                this.props.liveChange(data, true)
            }
        })
    }

    setFormWidth = () => {
        if (this.form) {
            this.setState({ width: this.form.getBoundingClientRect().width })
        }
    }

    changeFiles = (value, key, extra) => {
        let data = this.state.data ?? {}

        if (data['**files'] == null) {
            data['**files'] = {}
        }
        if (value) {


            this.state.headers?.forEach(header => {
                if (header.key == key) {
                    value.formType = header.type
                }
            });
        }
        data['**files'][key] = value
        this.setState({ data })
    }

    changeValue = (key, value, extra) => {
        let data = { ...this.state.data }
        data = setObject(data, key, value, extra?.append)
        this.setState({ data }, () => {
            this.changeDependency(key, value)
        })
        if (this.props.liveChange) {
            this.props.liveChange(data)
        }
    }

    setStatus = (type, key, value) => {
        let errors = this.state.errors
        let valid = this.state.valid


        delete errors[key]
        delete valid[key]

        if (type == 'error') {
            errors[key] = value
        }
        if (type == 'valid') {
            valid[key] = value
        }

        this.setState({ errors, valid })

    }



    formColBuilder(col) {
        console.log('my col is', col)
        let finalCol = 'col-span-2'

        if (400 < this.state.width && col) {
            finalCol = 'col-span-' + col
            console.log(true, finalCol)
        }

        return finalCol
    }





    render() {
        if (this.state.show && this.state.headers) {
            return (
                <div className="w-100" ref={(el) => this.form = el}>
                    <div className="grid grid-cols-2 gap-4">
                        {this.state.headers && this.state.headers.map((header, index) => {
                            let Component = inputComponents[header.type]
                            let data = getObject(this.state.data, header.key)
                            let files
                            if (this.state.data && this.state.data['**files']) {
                                files = getObject(this.state.data['**files'], header.key)
                            }

                            if (header.type == 'SectionInput') {
                                return (
                                    <div className=" mb-1 text-start" key={header.key}>
                                        <Component ref={el => this["component-" + header.key] = el} header={header} data={data} files={files} changeFiles={this.changeFiles} changeValue={this.changeValue} setStatus={this.setStatus} variables={this.props.variables} optionsList={this.props.optionsList} />
                                    </div>
                                )
                            }

                            else if (Component && !header.hideComponent) {
                                console.log('header.key',header.key)
                                return (
                                    <div key={header.key} className={" " + header.key  +" "+ this.formColBuilder(header.col) + (index !== header.length - 1 ? ' mb-2' : '')}>
                                        <div className="">
                                            {header.information?.label && (
                                                <div className=" mb-1 text-start">
                                                    <label className={'text-small mr-1 ml-1  ' + (header.information?.required ? 'required' : '')}>{checkTextTranslation(header.information?.label)}</label>
                                                </div>
                                            )}
                                            <div className="col-span-2" >
                                                <div className={"flexc " + (header.information.inputClass ?? (this.props.inputClass ? this.props.inputClass : 'default-input-view ')) + ' ' + ((this.state.valid[header.key] ? ' valid-input ' : ' ') + (this.state.errors[header.key] ? ' error-input ' : ' '))} >
                                                    {header.information?.icon && (
                                                        <img className="me-3 w-5 opacity-50" src='/assets/login/key-gray.svg' alt="icon" />
                                                    )}
                                                    <Component ref={el => this["component-" + header.key] = el} header={header} data={data} files={files} changeFiles={this.changeFiles} changeValue={this.changeValue} setStatus={this.setStatus} variables={this.props.variables} optionsList={this.props.optionsList} />
                                                </div>
                                            </div>

                                            {header.information?.hint && (
                                                <div className="col-span-2 mt-1 mld-2 text-start">
                                                    <small style={{ color: '#9ab', fontSize: 12, }}>{checkTextTranslation(header.information?.hint)}</small>
                                                </div>
                                            )}

                                            {this.props.errors && this.props.errors[header.key] && (
                                                <div className="col-span-2 mt-1 mld-2 text-start">
                                                    <small style={{ color: '#ee5050' }}>{checkTextTranslation(this.props.errors[header.key])}</small>
                                                </div>
                                            )}

                                            {this.state.errors && this.state.errors[header.key] && (!this.props.errors || !this.props.errors[header.key]) && (
                                                <div className=" mt-1 mld-2 text-start">
                                                    <small style={{ color: '#ee5050' }}>{checkTextTranslation(this.state.errors[header.key])}</small>
                                                </div>
                                            )}

                                        </div>
                                    </div>
                                )
                            }
                        })}
                        {this.props.errors && (typeof this.props.errors == 'string') && (
                            <div className=" text-start">
                                <small style={{ color: '#ee5050' }}>{checkTextTranslation(this.props.errors)}</small>
                            </div>
                        )}
                    </div>

                </div>
            )
        } else {
            return (<div></div>)
        }
    }
}

export default FormViewer;