import {
    IS_LOADING_COIN_NEWS,
    IS_LOADING_COINS,
    IS_LOADING_USER,
    IS_LOADING_USER_FAVS
} from './appActionTypes'

const initializeState = () => (dispatch, getState) => {
    console.log(getState().appInit.isLoadingCoinNews)
}

const setIsLoadingCoinNews = value => {
    return {
        type: IS_LOADING_COIN_NEWS,
        value
    }
}

const setIsLoadingCoins = value => {
    return {
        type: IS_LOADING_COINS,
        value
    }
}

const setIsLoadingUser = value => {
    return {
        type: IS_LOADING_USER,
        value
    }
}

const setIsLoadingUserFavs = value => {
    return {
        type: IS_LOADING_USER_FAVS,
        value
    }
}

export {
    initializeState,
    setIsLoadingCoinNews,
    setIsLoadingCoins,
    setIsLoadingUser,
    setIsLoadingUserFavs
}