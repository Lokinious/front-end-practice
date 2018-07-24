import {
    SET_USER_NAME,
    IS_ERROR_FETCHING_USER_DATA
  }  from './headerActionTypes'
  
  
  const loadData = () => (dispatch, getState) => {
  
    /* Code to call endpoint for initial load */
  }
  
  const setUserName = value => {
    return {
      type: SET_USER_NAME,
      value
    }
  }
  
  const setIsErrorFetchingUserDataSelector = value => {
    return {
      type: IS_ERROR_FETCHING_USER_DATA,
      value
    }
  }
  
  export {
    setUserName,
    setIsErrorFetchingUserDataSelector,
    loadData
  }