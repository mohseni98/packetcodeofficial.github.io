import Router, { withRouter } from 'next/router';
import React from 'react'

class PageStatusViewer extends React.Component {



    state = {
        timer: 4,
    }

    startTimer() {
        if (!this.timer) {
            this.timer = setInterval(this.checkTimer, 1000);
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    checkTimer = () => {
        if (this.state.timer > 0) {
            this.setState({ timer: this.state.timer - 1 })
        } else {
            let query = this.props.query;
            let ref = query?.ref 
            if (ref && ref !== '') {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                Router.push({ pathname: ref })
            } else {
                if (this.timer) {
                    clearInterval(this.timer)
                }
                Router.push({ pathname: '/' })
            }
        }
    }


    render() {
        if (!this.props.status) {

            return (
                <div className="mt-5 text-center w-100">
                    <p>Is Loading ...</p>
                </div>
            )
        }

        if (this.props.status == 200) {
            return this.props.children

        }

        if (this.props.status == 500) {
            return (
                <div className="text-center pt-5">
                    <p className="text-bold text-big mb-0">500</p>
                    <p className="text-uppercase mt-0">Server Error</p>
                </div>
            )

        }


        if (this.props.status == 401) {
            return (

                <div className="w-100 text-center flexcc flex-column min-full-height">
                    <h3 className=" text-ultra-big" style={{ margin: '50px 0px 0px 0px' }}>You are not allowd</h3>
                    <h3 className=" text-big m-0">to access this page</h3>
                    <h3 className=" text-mega-big m-0 pb-5">401</h3>
                </div>
            )
        }


        if (this.props.status == 404) {
            return (
                <div className="w-100 mt-5 text-center">
                    <h3 className=" text-ultra-big m-0">Page Not Found</h3>
                    <h3 className=" text-mega-big m-0">404</h3>
                </div>
            )
        }

    }
}

export default withRouter(PageStatusViewer);