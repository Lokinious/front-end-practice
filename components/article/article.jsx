import React, {Component} from 'react'
import classNames from 'classnames'

class Article extends Component {

    constructor(props){
        super(props)
        isErrorLoadingCoinNews = this.props.isErrorLoadingCoinNews
        retrieveCoinNews = this.props.retrieveCoinNews
    }

    render(){

        return (
            <div className="article">

            </div>
        )
    }
}

export default Article