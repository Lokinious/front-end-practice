import {
    IS_ERROR_LOADING_COIN_NEWS,
    RETRIEVE_COIN_NEWS
} from './articleActionTypes'

const loadCoinNews = () => {

}

const isErrorLoadingCoinNews = value =>{
    return {
        type: IS_ERROR_LOADING_COIN_NEWS,
        value
    }
}

const retrieveCoinNews = value => {
    return {
        type: RETRIEVE_COIN_NEWS,
        value
    }
}

export {
    loadCoinNews,
    isErrorLoadingCoinNews,
    retrieveCoinNews
}