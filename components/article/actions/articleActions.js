import {
    IS_ERROR_LOADING_COIN_NEWS
} from './articleActionTypes'

import {
    getApi
} from '../../api/cryptoNews'

const loadCoinNews = () => {
    let api = getApi()

    api.getLatestNews()
    .then((data) => {
        console.log(data)
    })
    .catch(() => {
        console.log("News is currently unavailable!")
        dispatch(setIsErrorLoadingCoinNews(true))
    })
}

const setIsErrorLoadingCoinNews = value =>{
    return {
        type: IS_ERROR_LOADING_COIN_NEWS,
        value
    }
}

export {
    loadCoinNews,
    setIsErrorLoadingCoinNews
}