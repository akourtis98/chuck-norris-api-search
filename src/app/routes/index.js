import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { Router, Route } from 'react-router';


import { fetchJokes } from '../actions/searchActions';

import App from '../components/app';
import Photos from '../components/search';
import store from '../store';

import Home from './../components/home'
import Cache from './../components/cache'
import Search from './../components/search'
import Link from 'link-react';

export default class Routes extends React.Component {

    render() {
        return (
            < Provider store={store} >
                <BrowserRouter>
                    <div>
                        <header>
                            <Link to="/">Home</Link>
                            <br />
                            <Link to="/search" >Search</Link>
                            <br />
                            <Link to="/cache">Cache</Link>
                            <hr />
                        </header>
                        <Route path="/" component={Home} exact />//            
                        <Route path="/search" component={Search} exact />
                        <Route path="/cache" component={Cache} exact />
                    </div>
                </BrowserRouter>
            </Provider >
        )
    }
}