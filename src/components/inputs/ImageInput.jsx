import React from "react";
import Modal from "../basic/Modal.jsx";
import { checkTranslation, imageAddress } from '../../../utils/useful'
import CustomDropZone from "../basic/CustomDropZone.jsx";


class ImageInput extends React.Component {

    state = {
        images: [],
        files: [],
        oldImages: null
    }

    componentDidMount() {
        if (this.props.data) {
            let data = JSON.parse(JSON.stringify(this.props.data))
            this.setState({ oldImages: Array.isArray(data) ? data : [data] })
        } else {
            this.setState({ oldImages: null })
        }
        if (this.props.files) {
            let files = Array.isArray(this.props.files) ? [...this.props.files] : [this.props.files]

            files.forEach((file, index) => {
                files[index] = URL.createObjectURL(file)
            });
            this.setState({ images: files })
        }
    }

    componentDidUpdate(preProps) {
        if (preProps.data != this.props.data) {
            if (this.props.data) {
                let data = JSON.parse(JSON.stringify(this.props.data))
                if (data && data != '' && data != []) {
                    this.setState({ oldImages: Array.isArray(data) ? data : [data] })
                } else {
                    this.setState({ oldImages: [] })
                }
            } else {
                this.setState({ oldImages: null, images: [], files: [] })

            }
        }

    }



    showImage(imageAddress) {
        this.setState({ selectedImage: imageAddress })
        this.imageModal.showModal()
    }

    render() {
        let info = this.props.header.information
        return (

            <div className={"text-center "} style={{ width: '100%', textAlign: 'center', height: info.singleRow ? '28px' : 'auto' }}>

                {((this.state.images?.length > 0 || this.state.oldImages?.length > 0) && info && info.single) ? (<div></div>) : (

                    <CustomDropZone information={info} onDrop={this.chooseImage}>
                        <div className="text-center w-full flexcc mt-2 cursor-pointer" style={{ cursor: 'pointer', flexDirection: info.singleRow ? 'row' : 'column' }}>
                            <img src={'/assets/default/image-input.svg'} width={info.singleRow ? 20 : 40} />
                            {!info.singleRow && (
                                <p className="text-sm text-egray-600 mb-2 mt-1 ">{info.placeholder ? checkTranslation(info.placeholder) : checkTranslation("Choose image")}</p>
                            )}
                        </div>
                    </CustomDropZone>
                )}

                {
                    (((Array.isArray(this.state.oldImages) && this.state.oldImages.length > 0) || (Array.isArray(this.state.images) && this.state.images.length > 0))) && (
                        <div className="p-0 m-0 mt-1 mb-2" style={{ display: 'inline-flex', flexWrap: 'wrap' }}>

                            {this.state.oldImages && Array.isArray(this.state.oldImages) && this.state.oldImages.map((prop, index) => {
                                return (
                                    <div key={index} style={{ position: 'relative' }}>
                                        <img onClick={() => this.showImage(imageAddress(prop, "mini"))} className={"m-1 "} src={imageAddress(prop, "mini", 'small')} height={info.singleRow ? "25px" : "60px"} style={{ borderRadius: 4 }} />
                                        <div onClick={() => { this.removeOldFile(index) }} style={{ position: 'absolute', top: 1, left: 0, backgroundColor: '#ee5050dd', borderRadius: '50%', width: 22, height: 22, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 0, cursor: 'pointer' }}><p style={{ color: '#fff', marginTop: 4 }}>X</p></div>
                                    </div>
                                )
                            })}


                            {this.state.images.map((prop, index) => {
                                return (
                                    <div key={index} style={{ position: 'relative' }}>
                                        <img onClick={() => this.showImage(prop)} className={"m-1 "} src={prop} height={info.singleRow ? "25px" : "60px"} style={{ borderRadius: 4 }} />
                                        <div onClick={() => { this.removeFile("key", index) }} style={{ position: 'absolute', top: 1, left: 0, backgroundColor: '#ee5050dd', borderRadius: '50%', width: 22, height: 22, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 0, cursor: 'pointer' }}><p style={{ color: '#fff', marginTop: 0 }}>X</p></div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                }



                <Modal ref={el => this.imageModal = el} maxWidth={500}>
                    <img src={this.state.selectedImage} style={{ width: '100%' }} />
                </Modal>


            </div >

        );
    }




    chooseImage = (newFiles, newImages) => {

        let images = this.state.images
        let files = this.state.files
        if (this.props.header.information.single) {
            images = newImages
            files = Array.isArray(newFiles) ? newFiles[0] : newFiles
        } else {
            if (!Array.isArray(images)) {
                images = []
            }
            if (!Array.isArray(files)) {
                files = []
            }
            images = [...images, ...newImages]
            files = [...files, ...newFiles]
        }

        console.log(files)

        this.setState({ images, files })
        this.props.changeFiles(files, this.props.header?.key, this.props.extra)

    }

    onDrop(filesInput) {
        const newImage = URL.createObjectURL(filesInput[0])
        this.setState({ image: newImage, type: filesInput[0].type })
        var images = this.state.images
        var files = this.state.files
        images.push(newImage)

        files.push(filesInput[0])
        this.setState({ images, files })
        this.props.changeFiles(files, this.props.header?.key, this.props.extra)
    }


    urltoFile(url, filename, mimeType) {
        return (fetch(url)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }

    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }


        var ia = new Uint8Array(bstr.length);
        for (var i = 0; i < bstr.length; i++) {
            ia[i] = bstr.charCodeAt(i);
        }
        return new Blob([ia], { type: mime });
    }

    blobToFile = (blob, fileName) => {
        var myBlob = blob
        myBlob.lastModifiedDate = new Date();
        myBlob.name = fileName;
        return new File(myBlob);
    }


    _crop() {
        var images = this.state.images
        var files = this.state.files
        let options = { imageSmoothingQuality: 'medium' }
        if (this.state.type != 'image/png') {
            options.fillColor = '#fff'
        }
        var dataURL = this.refs.cropper.getCroppedCanvas(options).toDataURL(this.state.type, 1)

        images.push(dataURL)
        var file = this.dataURLtoFile(dataURL, 'a.jpg');
        files.push(file)
        this.setState({ images, files })
        this.props.changeFiles(files, this.props.header?.key, this.props.extra)
    }


    removeOldFile(index) {
        var oldImages = this.state.oldImages
        oldImages.splice(index, 1)
        this.setState({ oldImages })
        this.props.changeValue(this.props.header?.key, oldImages, this.props.extra)
    }



    removeFile(key, index) {
        var images = this.state.images
        var files = this.state.files
        images.splice(index, 1)
        if (Array.isArray(files)) {
            files.splice(index, 1)
        } else {
            files = null
        }
        this.setState({ images, files })
        this.props.changeFiles(files, this.props.header?.key, this.props.extra)

    }
}

export default ImageInput;
