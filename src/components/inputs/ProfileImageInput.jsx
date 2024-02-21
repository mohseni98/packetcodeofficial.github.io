import React from "react";
import Modal from "../Modal.jsx";
import CustomDropZone from "../CustomDropZone.jsx";
import { imageAddress, translate } from "../../utils/useful.js";

class ProfileImageInput extends React.Component {

    state = {
        images: [],
        files: [],
        oldImages: null
    }

    componentDidMount() {
        this.init()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data != this.props.data) {
            // this.init()
        }
    }

    init = () => {
        // console.log(this.props.data)

        if (this.props.data) {
            let data = JSON.parse(JSON.stringify(this.props.data))
            // console.log(Array.isArray(data) ? data : [data])
            this.setState({ oldImages: Array.isArray(data) ? data : [data] })
        } else {
            this.setState({ oldImages: null })
        }
    }


    showImage(imageAddress) {
        this.setState({ selectedImage: imageAddress })
        this.imageModal.showModal()
    }

    render() {
        let info = this.props.header.information
        // console.log(this.state.oldImages)
        return (
            <div className="profileImageInput flexcc w-100">

                <div className="">

                    {(this.state.images?.length > 0 || this.state.oldImages?.length > 0) ? (
                        <div className="flexcc flex-column">
                            <div className="h-100">
                                {this.state.oldImages && Array.isArray(this.state.oldImages) && this.state.oldImages.map((prop, index) => {
                                    return (
                                        <div className="profileImageInputContainer" key={index}>
                                            <img className="profileImage" onClick={() => this.showImage(imageAddress(prop))} src={imageAddress(prop, 'small')} />
                                        </div>
                                    )
                                })}

                                {this.state.images.map((prop, index) => {
                                    return (
                                        <div className="profileImageInputContainer" key={index}>
                                            <img className="profileImage" onClick={() => this.showImage(prop)} src={prop} />
                                            {/* <button onClick={() => { this.removeFile("key", index) }} style={{ position: 'absolute', top: 5, left: 5, backgroundColor: '#ee5050dd', borderRadius: '50%', width: 25, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 0, cursor: 'pointer', color: '#fff' }}>X</button> */}
                                        </div>
                                    )
                                })}
                            </div>

                            <CustomDropZone information={info} onDrop={this.changeImage}>
                                <button className={'profileImageButton mt-2'}>
                                    <span>{translate('Change Image')}</span>
                                </button>
                            </CustomDropZone>

                            <button className="profileImageRemoveButton mt-2" onClick={() => { this.removeOldFile(0) }}>
                                <span>{translate("Remove Image")}</span>
                            </button>


                        </div>
                    ) : (


                        <CustomDropZone information={info} onDrop={this.chooseImage}>
                            <div className="flexcc flex-column">
                                <div className="profileImageInputContainer">
                                    <img className="profileImage" src={'/images/male.png'} />
                                </div>

                                <button className={'profileImageButton mt-2'}>
                                    <span>انتخاب تصویر</span>
                                </button>
                            </div>
                        </CustomDropZone>


                    )}



                    <Modal ref={el => this.imageModal = el} maxWidth={500}>
                        <div className="flexcc">
                            <img src={this.state.selectedImage} style={{ maxWidth: '100%', maxHeight: '80%', borderRadius: 15 }} />
                        </div>
                    </Modal>


                </div>

            </div>
        );
    }



    chooseImage = (newFiles, newImages) => {

        let images = newImages
        let files = newFiles

        this.setState({ images, files })
        this.props.changeFiles(files, this.props.header?.key, 'image')

    }


    changeImage = (newFiles, newImages) => {

        // let images = this.state.images
        // let files = this.state.files
        // files = files.concat(newFiles)
        // images = images.concat(newImages)

        let images = newImages
        let files = newFiles

        this.setState({ images, files, oldImages: null })
        this.props.changeValue(this.props.header?.key, null, this.props.extra)
        this.props.changeFiles(files, this.props.header?.key, 'image')

    }


    removeOldFile(index) {
        var oldImages = this.state.oldImages
        console.log(oldImages)
        // if (oldImages?.length > 0) {
        oldImages = null //.splice(index, 1)
        this.setState({ oldImages })
        this.props.changeValue(this.props.header?.key, oldImages, this.props.extra)
        setTimeout(() => {
            this.removeFile()
        }, 50);

        // }
    }



    removeFile(key, index) {
        var images = this.state.images
        var files = this.state.files
        // if (images?.length > 0) {
        images = []//.splice(index, 1)
        files = []//.splice(index, 1)
        this.setState({ images, files })
        setTimeout(() => {
            this.props.changeFiles(null, this.props.header?.key, 'file')
        })
        // }

    }
}

export default ProfileImageInput;
