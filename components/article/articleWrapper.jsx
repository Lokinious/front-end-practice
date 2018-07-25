import {connect} from 'react-redux'
import Article from './article'

import {
    loadCoinNews
} from './actions/articleActions'

const mapStateToProps = state => {
    return {
       isErrorLoadingCoinNews: state.articleData.isErrorLoadingCoinNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadCoinNews: loadCoinNews
    }
}

const ArticleWrapper = connect (
    mapStateToProps,
    mapDispatchToProps
)(Article)

export default ArticleWrapper