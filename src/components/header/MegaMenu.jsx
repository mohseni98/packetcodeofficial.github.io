
import React from 'react'
import Link from 'next/link';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../../stores/actionsList";
import { checkTranslation, translate, imageAddress } from '../../../utils/useful';
import Collapsible from 'react-collapsible';



class MegaMenu extends React.Component {
    state = {
        showMenu: false,
        navbar: false,
        socialmedia: [
            { src: '/assets/header/Whatsapp.svg', link: 'https://api.whatsapp.com/send?phone=006588318705' },
            { src: '/assets/header/Facebook.svg', link: 'https://www.facebook.com/Antbuildzcom-113003753674015' },
            { src: '/assets/header/Linkedin.svg', link: 'https://www.linkedin.com/company/antbuildz/about' },
            { src: '/assets/header/Instagram.svg', link: 'mailto://info@antbuildz.com' },
        ],
        currentCategory: null,


        categoryOpen: true,
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.categories != this.props.categories) {
            this.init()
        }
    }


    init() {
        let currentCategory
        if (this.props.categories) {
            this.props.categories?.forEach(element => {
                if (element.parent == null && !currentCategory) {
                    currentCategory = element
                }
            });

            this.setState({ currentCategory })
        }
    }


    closeMenu = (force) => {
        this.setState({ showItem: false })
        this.props.onMenu(false)
        if (force) {
            this.setState({ showMenu: false, menuIsHovered: false })
            //  this.showItem
        } else {

            setTimeout(() => {
                if (!this.state.menuIsHovered) {
                    this.setState({ showMenu: false })
                }
            }, 800);
            //  }
        }
    }

    hideMegaMenuWithDelay = () => {
        setTimeout(() => {
            this.closeMenu(true)
        }, 500);
    }


    countChildren = (id) => {
        let count = 0
        if (this.props.categories) {
            for (let i = 0; i < this.props.categories.length; i++) {
                const category = this.props.categories[i];

                let parent = category?.parent?._id ?? category.parent

                // console.log(parent)
                if (parent == id) {
                    count++
                }
            }
        }

        return count

    }

    changeshow = () => {
        console.log("changeshow")
        this.setState({ showItem: true, showMenu: true })
    }

    hideHoverMenu = () => {
        this.setState({ menuIsHovered: false, showItem: false, showMenu: false })
    }




    render() {
        if (this.state.showMenu) {

            return (
                <div onMouseOver={() => [this.setState({ menuIsHovered: true }), this.props.onMenu(true)]} onMouseLeave={() => this.closeMenu(true)} ref={this.childRef} className='pointer-events-auto bg-white w-3/4 h-[500px] rounded-3xl overflow-hidden' style={{ boxShadow: '0px 0px 50px #10101050', }}>
                    <div className="h-full">
                        <div className="h-full flex">
                            <div className=" megamenu-side-container z-10 bg-egray-950 w-[30%]" >
                                {this.state.currentCategory && (
                                    <div className="no-scrollbar w-full h-full p-10">
                                        <div className="w-full flex flexcb flex-col" style={{ minHeight: '100%' }}>
                                            <div style={{ justifyContent: 'center', alignItems: "center" }}>
                                                <img style={{ width: '100%', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', borderRadius: 15 }} src={imageAddress(this.state.currentCategory?.image)} />
                                                <div className=''>
                                                    <p className="mt-3 mb-2 text-2xl text-white">{this.state.currentCategory?.name} </p>
                                                    <p className="mt-0 mb-1 uppercase text-2xl text-white" > {this.state.currentCategory?.en.name} </p>
                                                    <p className="mb-3 text-sm text-egray-100">  {this.state.currentCategory?.description}</p>
                                                </div>
                                            </div>
                                            <div className="w-full pb-4">
                                                <div>
                                                    <p className='text-egray-200'>{translate("Follow us")}</p>
                                                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                                                        {this.state.socialmedia.map((data) => {
                                                            return (
                                                                <a href={data.link} target="_blank">
                                                                    <div className=' bg-white rounded-full w-8 me-4'>
                                                                        <img className='flexcc w-full' src={data.src} />
                                                                    </div>
                                                                </a>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="flex w-full">
                                <div className="h-full w-[30%]">
                                    <div className="no-scrollbar w-full h-full overflow-auto bg-egray-50">
                                        {this.props.categories?.map((item) => {
                                            if (item.parent == null)
                                                return (
                                                    <Link href={'/category/' + item?._id}>
                                                        <div className='flexc w-full' onClick={() => this.hideMegaMenuWithDelay()} >
                                                            <div className="flexc w-full px-6 py-3 border-b border-egray-100 transition-all cursor-pointer" style={{ backgroundColor: this.state.currentCategory?._id == item._id ? '#eee' : 'transparent' }} onMouseOver={() => this.setState({ currentCategory: item })}>
                                                                <img src={imageAddress(item?.icon)} width="40px" className={" " + (this.state.currentCategory?._id == item._id ? "" : "saturate-0")} />
                                                                <p className="mx-2 text-base" style={{ color: this.state.currentCategory?._id == item._id ? '#E30909' : '#000' }}>
                                                                    {item.name}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                )
                                        })}
                                    </div>
                                </div>

                                <div className="h-full bg-white w-[70%]">
                                    <div className="no-scrollbar overflow-auto h-full">
                                        {this.state.currentCategory && this.countChildren(this.state.currentCategory?._id) == 0 && (
                                            <div className="flexcc flex-col py-5">
                                                <p className="mb-1 text-sm">{translate("No Child Categories")}</p>
                                                <Link href={'/category/' + this.state.currentCategory?._id}>
                                                    <p onClick={() => this.hideMegaMenuWithDelay()} className='text-indigo-800 text-sm'> {translate("View All")} {this.state.currentCategory?.name}</p>
                                                </Link>
                                            </div>
                                        )}


                                        {this.props.categories?.map((item) => {
                                            let parent = item.parent?._id ?? item.parent
                                            if (parent == this.state.currentCategory?._id) {
                                                return (
                                                    <div className='border-b border-egray-100 px-6 py-3'>
                                                        <div className='flexcb flex-row'>
                                                            <Link href={'/category/' + item._id} style={{}}>
                                                                <div onClick={() => this.hideMegaMenuWithDelay()}>
                                                                    <div className="flexc">
                                                                        <img src={imageAddress(item.icon)} width={40} />
                                                                        <p className="mx-2 text-sm text-egray-800">{item.name}</p>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link href={'/category/' + item._id} style={{}}>
                                                                <div onClick={() => this.hideMegaMenuWithDelay()}>
                                                                    <p className='text-egray-600 text-sm'>{translate("View All")}</p>
                                                                </div>
                                                            </Link>
                                                        </div>
                                                        <div className="container flexc  " style={{}} >
                                                            <Collapsible className='' open={!this.state.categoryOpen[item._id]} style={{}}>
                                                                {this.props.categories.map((subcategory, index) => {
                                                                    if (subcategory.parent?._id == item._id)
                                                                        return (
                                                                            <Link href={'/category/' + subcategory._id} key={index} style={{}}>
                                                                                <div onClick={() => this.hideMegaMenuWithDelay()} className=" w-full mt-3 px-2 flexc">
                                                                                    <p className="" style={{ fontSize: '14px', cursor: 'pointer', paddingLeft: 33 }}>{subcategory.name}</p>
                                                                                </div>
                                                                            </Link>
                                                                        )
                                                                })}
                                                            </Collapsible>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        }
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else {
            return <div></div>
        }

    }
}
const mapStateToProps = (state) => ({
    settings: state.settings,
    cart: state.cart,
    user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { forwardRef: true }
)(MegaMenu);