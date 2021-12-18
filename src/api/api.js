import {hideLoading, showLoading} from "../redux/authReducer";
import {deleteFilters, openFilters} from "../redux/filterReducer";
import {setFilteredProducts} from "../redux/productsReducer";

const serverURL = 'http://localhost:3001/'

const get = (url) => fetch(`${serverURL}${url}`).then(res => res.json())

const post = (url, data) => fetch(`${serverURL}${url}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body:  JSON.stringify(data),
}).then(res => res.json())

export const authAPI = {
    signIn(data) {
        return post('signin', data)
    },
    login(data) {
        return post('login', data)
    }
}

export const productsAPI = {
    getBooks() {
        return get('books')
    },
    getFilteredBooks(data) {
        return post('books/filtered', data)
    },
    getGuitars() {
      return get('guitars')
    },
    getFilteredGuitars(data) {

        return post('guitars/filtered', data)
    },
    getVouchers() {
      return get('vouchers')
    },
    getFilteredVouchers(data) {
        return post('vouchers/filtered', data)
    },
    getCountries() {
        return get('countries')
    },
    getCountryFilteredVouchers(countryID) {
        return get(`vouchers/countries?id=${countryID}`)
    }
}

export const wishesAPI = {
    getWishes() {
        return get('wishes')
    }
}

export const articlesAPI = {
    getArticles() {
        return get('articles')
    },
    getFullArticle(articleID) {
        return get(`article?id=${articleID}`)
    }
}

export const request = (requestType, actionReducer) => async dispatch => {
    dispatch(showLoading())

    const response = await requestType()
    dispatch(actionReducer(response))
    dispatch(hideLoading())
}

export const filterRequest = (method, data) => async dispatch => {
    dispatch(showLoading())
    let response =  await method(data)

    dispatch(setFilteredProducts(response))
    dispatch(deleteFilters())
    dispatch(hideLoading())
}

