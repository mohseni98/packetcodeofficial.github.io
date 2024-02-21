import React, { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner'
import { checkTextTranslation } from '../../../utils/useful'

export default class LoaderButton extends React.Component {

    state = {
        isLoading: false,
        opacity: 1
    }

    onClick = () => {
        if (!this.props.isLoading) {
            this.props.onClick()
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.isLoading !== prevProps.isLoading) {
            this.setState({ opacity: 0 })
            setTimeout(() => {
                this.setState({ isLoading: this.props.isLoading })
                this.setState({ opacity: 1 })
            }, 300);
        }
    }

    componentDidMount() {
        // console.log("props", this.props);
    }

    render() {
        return (
            <div onMouseOver={() => this.setState({ opacity: 0.8 })} onMouseLeave={() => this.setState({ opacity: 1 })} className={'flexc ' + this.props.className} >
                {!this.state.isLoading ? (
                    <button className={this.props.buttomClassName} onClick={() => this.onClick()} style={{ ...this.props.buttonStyle, ...{ opacity: this.state.opacity, transition: 'all 0.5s' } }} >
                        <p style={{ whiteSpace: 'pre-wrap', color: this.props.color }}>{checkTextTranslation(this.props.text)}</p>
                    </button>
                ) : (
                    <ThreeDots
                        type={this.props.type ?? "Oval"}
                        color={"#000"}
                        height={50}
                        width={50}
                    />
                )}
            </div>

        )
    }
}