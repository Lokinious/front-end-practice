import {combineReducers} from 'redux'
import {appInit} from './appReducer'
import {articleData} from './articleReducer'
import {headerData} from './headerReducer'

const indexReducer = combineReducers({
    appInit,
    articleData,
    headerData
})

export {
  indexReducer
}