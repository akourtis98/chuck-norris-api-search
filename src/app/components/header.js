import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { connect } from "react-redux"

// components 
import Home from './home'
import Cache from './cache'
import Search from './search'
import searchEmpty from "./searchempty";


export default class Header extends React.Component {
    render () {
    return ( <BrowserRouter>
        <div>
        <header>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/search">Search</Link>
            <br/>
            <Link to="/cache">Cache</Link>
            <hr/>
        </header>
        <Route path="/" component={Home} exact/>
        <Route path="/search" component={Search} exact/>
        <Route path="/cache" component={Cache} exact/>
        </div>
        </BrowserRouter>)
    }
}

