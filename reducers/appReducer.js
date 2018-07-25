import {combineReducers} from 'redux'

import {
    IS_LOADING_COIN_NEWS,
    IS_LOADING_COINS,
    IS_LOADING_USER,
    IS_LOADING_USER_FAVS
} from '../components/app/actions/appActionTypes'

const isLoadingCoinNews = (state = true, action) => {
    switch(action.type){
        case IS_LOADING_COIN_NEWS:
            return action.value
        default:
            return state
    }
}

const isLoadingCoins = (state = true, action) => {
    switch(action.type){
        case IS_LOADING_COINS:
            return action.value
        default:
            return state
    }
}

const isLoadingUser = (state = true, action) => {
    switch(action.type){
        case IS_LOADING_USER:
            return action.value
        default:
            return state
    }
}

const isLoadingUserFavs = (state = true, action) => {
    switch(action.type){
        case IS_LOADING_USER_FAVS:
            return action.value
        default:
            return state
    }
}

const appInit = combineReducers({
    isLoadingCoinNews,
    isLoadingCoins,
    isLoadingUser,
    isLoadingUserFavs
})

export {
    appInit
}