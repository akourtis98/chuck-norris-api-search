import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

// components 
import Home from './home';
import Cache from './cache';
import Search from './search';

class Header extends React.Component {
    render() {
        return (
        <BrowserRouter>
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
        </BrowserRouter>);
        }
    }  

export default Header;