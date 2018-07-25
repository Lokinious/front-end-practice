import {combineReducers} from 'redux'
import {appInit} from './appReducer'
import {headerData} from './headerReducer'

const indexReducer = combineReducers({
    appInit,
    headerData
})

export {
  indexReducer
}