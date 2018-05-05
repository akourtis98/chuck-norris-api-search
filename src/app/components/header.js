import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import { connect } from "react-redux"
import { fetchUser } from "../actions/userActions"
// components 
import Home from './home'
import Cache from './cache'
import Search from './search'


class Header extends React.Component {

    render() {
        console.log(this.props)
        return <div>{this.props}</div>
    }
}

function mapStateToProps(state) {
    return { user: state.user.name }
}

export default connect(mapStateToProps)(Header);


/* <BrowserRouter>
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
</BrowserRouter>) */