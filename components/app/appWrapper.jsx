import {connect} from 'react-redux'
import App from './app'

const mapStateToProps = state => {
    return {};
}

const mapDispatchToProps = dispatch => {
    return {};
}

const AppWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppWrapper;