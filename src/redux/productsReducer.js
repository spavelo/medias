import {productsAPI} from "../api/api";
import {toggleIsFetching} from "./authReducer";

const GET_BOOKS = 'GET_BOOKS'
const GET_GUITARS = 'GET_GUITARS'
const CHANGE_CATEGORY = 'CHANGE_CATEGORY'
const initialState = {
    category: 'books',
    products: [],
    elementID: null,
    isBought: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BOOKS:
            return {...state, products: action.payload}
        case GET_GUITARS:
            return {...state, products: action.payload}
        case CHANGE_CATEGORY:
            return {...state, category: action.payload}
        default:
            return state
    }
}

const getBooks = books => ({type: GET_BOOKS, payload: books})
const getGuitars = guitars => ({type: GET_GUITARS, payload: guitars})
export const changeCategory = category => ({type: CHANGE_CATEGORY, payload: category})

export const getAsyncBooks = () => async (dispatch) => {
    dispatch(toggleIsFetching())

    const response = await productsAPI.getBooks()
    dispatch(getBooks(response))
    dispatch(toggleIsFetching())

}

export const getAsyncGuitars = () => async (dispatch) => {
    dispatch(toggleIsFetching())

    const response = await productsAPI.getGuitars()
    dispatch(getGuitars(response))
    dispatch(toggleIsFetching())

}

// export const sendOrder = (books) => {
//     const response = productsAPI.sendOrder(books)
// }