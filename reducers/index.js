import {combineReducers} from 'redux'
import {headerData} from './headerReducer'

const indexReducer = combineReducers({
    headerData
})

export {
  indexReducer
}