import classNames from 'classnames'
import React, {Component} from 'react'

import './app.scss'
import ArticleWrapper from '../article/articleWrapper'

class App extends Component{

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        this.props.initializeState()
    }

    render(){

        return (
            <div className="app">
                <ArticleWrapper/>
            </div>
        )
    }
}

export default App