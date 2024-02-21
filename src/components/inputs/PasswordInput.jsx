import React from 'react'
import { checkTextTranslation } from '../../../utils/useful'

class PasswordInput extends React.Component {
    state = {
    }


    changeInputValue(target) {
        let value = (target.validity.valid) ? target.value : null
        if (value !== null) {
            this.props.changeValue(this.props.header.key, value,this.props.extra)
        }
    }



    render() {
        return (
            <div className="w-100 h-100">
                <input ref={el => this.input = el} type={'password'} value={this.props.data ? this.props.data : ''} onChange={(e) => this.changeInputValue(e.target)} placeholder={checkTextTranslation(this.props.header.information.placeholder)} className="transpanet-input" />
            </div>
        )
    }
}

export default PasswordInput;