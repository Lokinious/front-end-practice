import {combineReducers} from 'redux'
import {
    IS_ERROR_LOADING_COIN_NEWS
} from '../components/article/actions/articleActionTypes'

const isErrorLoadingCoinNews = (state = false, action) => {
    switch(action.type){
        case IS_ERROR_LOADING_COIN_NEWS:
            return action.value
        default:
            return state
    }
}

const articleData = combineReducers({
    isErrorLoadingCoinNews
})

export {
    articleData
}