import React from 'react';
import Modal from "../../common/ModalWrap/Modal.component";
import CloseButton from "../../common/Buttons/CloseButton.component";
import {connect} from "react-redux";
import {closePhotosPopup} from "../../redux/modalReducer";
import {ImgContainer, MainImage, MainImg, OtherImgs, SmallImage, Wrapper} from "./PhotosPopup.style";

const PhotosPopup = (props) => {
    const {product, closePhotosPopup} = props

    const {image, title} = product

    return (
        <Modal width={'55%'}>
            <CloseButton onClick={closePhotosPopup}/>
            <Wrapper>
                {title}
                <ImgContainer>
                    <MainImage src={image}/>
                    <OtherImgs>
                        {image.map(img => <SmallImage img={img}/>)}
                    </OtherImgs>
                </ImgContainer>
            </Wrapper>
        </Modal>
    );
};

const mstp = state => ({
    product: state.products.currentProduct,
})

export default connect(mstp, {closePhotosPopup})(PhotosPopup);