import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// variable which holds the endpoint api
const url = "https://api.chucknorris.io/jokes/search?query=";

ReactDOM.render(<App/>, document.getElementById('root'));
