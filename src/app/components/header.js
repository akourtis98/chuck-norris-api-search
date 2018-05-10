import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { connect } from "react-redux";

// components 
import Home from './home';
import Cache from './cache';
import Search from './search';

export default class Header extends React.Component {
    render() {
        return (<BrowserRouter>  
            <div id="headerDiv">
                <div id="headings">
                    <li>
                        <a><Link to="/">Home</Link>
                        </a>
                    </li>
                    <li>
                        <a><Link to="/search">Search</Link>
                        </a>
                    </li>
                    <li>
                        <a><Link to="/cache">Cache</Link></a>
                    </li>
                </div>
                <Route path="/" component={Home} exact />
                <Route path="/search" component={Search} exact />
                <Route path="/cache" component={Cache} exact />
            </div>
        </BrowserRouter>)
    }
}


