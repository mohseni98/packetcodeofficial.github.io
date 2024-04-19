import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";


class Modal extends React.Component {

    state = {
        opacity: 1,
        showModal: false,
        maxWidth: 600
    }

    hideModal = (cb) => {
        document.body.classList.remove("body-no-sroll")
        window.removeEventListener("keydown", this.keyPress)
        if (this.state.showModal) {
            this.setState({ closing: true })

            if (this.props.onHide) {
                this.props.onHide()
            }

            setTimeout(() => {
                this.setState({ showModal: false }, () => {
                    if (cb) {
                        cb()
                    }

                })
            }, 500);
        }
    }

    showModal = (cb) => {
        window.addEventListener("keydown", this.keyPress)
        this.setState({ showModal: true, closing: false })
        setTimeout(() => {
        }, 50);
        if (cb) {
            cb()
        }
    }

    keyPress = (e) => {
        if (e?.keyCode == 27) {
            this.hideModal()
        }
    }

    componentDidMount() {
        if (this.props.maxWidth) {
            this.setState({ maxWidth: this.props.maxWidth })
        }
    }


    componentWillUnmount() {
        window.removeEventListener("keydown", this.keyPress)
        if (this.state.showModal) {
            document.body.classList.remove("body-no-sroll")
        }

    }

    onScroll = () => {
        if (this.props.onScroll) {
            this.props.onScroll()
        }
    }


    render() {
        if (this.state.showModal) {
            return (
                <div className={'transition-all fixed w-full h-[100vh] z-50 top-0 left-0 overflow-hidden ' + (this.state.closing ? 'transition-all duration-500 bg-transparent backdrop-blur-0 bg-opacity-0' : 'bg-white dark:bg-black bg-opacity-80 backdrop-blur-lg transition-all duration-500')} onClick={() => this.hideModal()}>
                    <div onScroll={() => this.onScroll()} className={"relative transition-all duration-500 m-auto w-full overflow-auto max-h-full mt-20 justify-center flex " + (this.state.closing ? 'opacity-0' : 'opacity-100')} style={{ paddingBottom: 100 }} onClick={() => this.hideModal()}>
                        <div className="w-full" style={{ maxWidth: this.state.maxWidth, marginTop: '10%', }} onClick={(e) => e.stopPropagation()}>
                            {this.props.children}
                        </div>
                    </div>

                    <button className={"flexcc blur-back absolute top-4 right-4 z-20 w-8 h-8 rounded-full " + (this.state.closing ? 'opacity-0' : 'opacity-100')} style={{ backgroundColor: '#00000010' }} onClick={() => { this.hideModal() }}>
                        <XMarkIcon aria-hidden='true' className="w-6 h-6 text-black dark:text-white" />
                    </button>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Modal;
