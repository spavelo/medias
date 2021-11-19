import React, {useEffect} from 'react';
import FullArticle from "./FullArticle.component";
import {useDispatch, useSelector} from "react-redux";
import {getAsyncFullArticle} from "../../redux/articlesReducer";

const FullArticleContainer = ({id}) => {
    console.log('Rerendered')
    const dispatch = useDispatch()

    const fullArticle = useSelector(state => state.articles.fullArticle)

    useEffect(() => {
        dispatch(getAsyncFullArticle(id))
    }, [])

    if (Object.keys(fullArticle) === 0) return <div>Loading...</div>

    return (
        <>
            <FullArticle fullArticle={fullArticle}/>
        </>
    );
};

export default FullArticleContainer;
