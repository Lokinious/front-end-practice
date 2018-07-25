import {combineReducers} from 'redux'
import {
  SET_USER_NAME,
  IS_ERROR_FETCHING_USER_DATA
} from '../components/header/actions/headerActionTypes'

const username = (state = 'N/A', action) => {
  switch (action.type) {
    case SET_USER_NAME:
        return action.value
    default:
      return state
  }
}

const isErrorFetchingUserData = (state = false, action) => {
  switch (action.type) {
    case IS_ERROR_FETCHING_USER_DATA:
      return action.value
    default:
      return state
  }
}

const headerData = combineReducers({
  username,
  isErrorFetchingUserData
})

export {
  headerData
}