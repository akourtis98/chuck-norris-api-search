import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import axios from 'axios'
import Search from "./search"
import PropTypes from "prop-types"
import { fetchJokes } from '../actions/searchActions';
import { connect } from "react-redux"



class searchEmpty extends React.Component {
  list = () => {
    ReactDOM.render(<Search />, document.getElementById('list'));
  }

  render() {
    
    return (
      <div>
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.." />
        <input type="submit" value="Submit" onClick={this.list} />
      </div>
    )
  }
}


export default searchEmpty