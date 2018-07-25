import {
    IS_ERROR_LOADING_COINS,
    IS_ERROR_LOADING_COIN_NEWS,
    IS_ERROR_LOADING_USER,
    RETRIEVE_COINS,
    RETRIEVE_COIN_NEWS,
    RETRIEVE_USER_FAVS
} from './appActionTypes'

const initializeState = () => (dispatch, getState) => {

}

const isErrorLoadingCoins = value => {
    return {
        type: IS_ERROR_LOADING_COINS,
        value
    }
}

const isErrorLoadingCoinNews = value => {
    return {
        type: IS_ERROR_LOADING_COIN_NEWS,
        value
    }
}

const isErrorLoadingUser = value => {
    return {
        type: IS_ERROR_LOADING_USER,
        value
    }
}

const retrieveCoins = value => {
    return {
        type: RETRIEVE_COINS,
        value
    }
}

const retrieveCoinNews = value => {
    return {
        type: RETRIEVE_COIN_NEWS,
        value
    }
}

const retrieveUserFavs = value => {
    return {
        type: RETRIEVE_USER_FAVS,
        value
    }
}

export {
    initializeState,
    isErrorLoadingCoins,
    isErrorLoadingCoinNews,
    isErrorLoadingUser,
    retrieveCoins,
    retrieveCoinNews,
    retrieveUserFavs
}