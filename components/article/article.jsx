import React, {Component} from 'react'
import classNames from 'classnames'

class Article extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.loadCoinNews()
    }

    render(){

        return (
            <div className="article">

            </div>
        )
    }
}

export default Article