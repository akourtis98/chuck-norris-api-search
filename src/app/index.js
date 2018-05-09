import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './css/style.css';
import { Provider } from "react-redux";
import store from "./store";

// components 
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}> 
    <Header />
  </Provider>,
  document.getElementById('root')
);
