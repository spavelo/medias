import {hideLoading, showLoading} from "../redux/authReducer";
import {openFilters} from "../redux/filterReducer";

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
        return get('book')
    },
    getGuitars() {
      return get('guitars')
    },
    getVouchers() {
      return get('vouchers')
    },
    getCountries() {
        return get('countries')
    },
    getFilteredVouchers(countryID) {
        return get(`filtered?id=${countryID}`)
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
    // dispatch(openFilters())

    const response = await requestType()
    dispatch(actionReducer(response))
    dispatch(hideLoading())
}

