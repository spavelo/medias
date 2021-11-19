import React, {useEffect} from 'react';
import {closeMoreInfoModal} from "../../redux/modalReducer";
import {useDispatch, useSelector} from "react-redux";
import MoreInfo from "./MoreInfo.component";

const MoreInfoContainer = () => {

    const dispatch = useDispatch()
    const currentBookId = useSelector(state => state.modal.currentBookId)

    const books = useSelector(state => state.products.books)
    const guitars = useSelector(state => state.products.guitars)

    const currentBook = books.filter(book => book.id === currentBookId)
    const currentGuitar = guitars.filter(guitar => guitar.id === currentBookId)

    const closeMoreInfo = () => dispatch(closeMoreInfoModal())

    useEffect(() => {
        document.querySelector('[data-close]').addEventListener('click', event => {
                if(event.target.dataset.close) return dispatch(closeMoreInfoModal())
            });
    }, [])

    return (
        <MoreInfo closeMoreInfo={closeMoreInfo} currentBook={currentBook}/>
    );
};

export default MoreInfoContainer;