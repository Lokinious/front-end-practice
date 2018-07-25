import {connect} from 'react-redux'
import App from './app'

import {
    initializeState,
    isErrorLoadingCoins,
    isErrorLoadingCoinNews,
    isErrorLoadingUser,
    retrieveCoins,
    retrieveCoinNews,
    retrieveUserFavs
} from './actions/appActions'

const mapStateToProps = state => {
    return {
        
    };
}

const mapDispatchToProps = dispatch => {
    return {};
}

const AppWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppWrapper;