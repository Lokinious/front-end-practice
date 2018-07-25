import {connect} from 'react-redux'
import App from './app'

import {
    initializeState
} from './actions/appActions'

const mapStateToProps = state => {
    return {
        isLoadingCoinNews: state.appInit.setIsLoadingCoinNews,
        isLoadingCoins: state.appInit.setIsLoadingCoins,
        isLoadingUser: state.appInit.setIsLoadingUser,
        isLoadingUserFavs: state.appInit.setIsLoadingUserFavs
    };
}

const mapDispatchToProps = dispatch => {
    return {
        initializeState: () => dispatch(initializeState())
    };
}

const AppWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppWrapper;