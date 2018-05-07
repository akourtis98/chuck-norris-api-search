import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import { Provider } from "react-redux"
import store from "./store"

// components 
import Header from './components/header';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);
