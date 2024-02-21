import React from 'react'
import { checkTextTranslation } from '../../../utils/useful'

class TextAreaInput extends React.Component {
    state = {
    }


    changeInputValue(target) {
        let value = (target.validity.valid) ? target.value : null
        if (value !== null) {
            this.props.changeValue(this.props.header.key, value,this.props.extra)
        }
    }

    init=()=>{
    }


    render() {
        return (
            <div className="w-full h-full">
                <textarea className="w-full min-h-[100px] resize-none sc-1 transpanet-input placeholder"  rows={this.props.header.information.rows} ref={el => this.input = el} value={this.props.data ? this.props.data : ''} onChange={(e) => this.changeInputValue(e.target)} placeholder={checkTextTranslation(this.props.header.information.placeholder)} />
            </div>
        )
    }
}

export default (TextAreaInput);