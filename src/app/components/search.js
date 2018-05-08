import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import axios from 'axios'
import PropTypes from "prop-types"
import { fetchJokes } from '../actions/searchActions';
import { connect } from "react-redux"
import renderHTML from 'react-render-html';

class Search extends React.Component {

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != ""){
      if(this.notCached(input)){
        this.props.fetchJokes(input, true);
      }else{
        console.log("this is cached: " + input);
        this.props.fetchJokes(input, true);
      }
    }else{
      console.log("enter proper values")
      this.props.fetchJokes(input, false);
    }
  }
  
  notCached = (input) => {
    if (localStorage.getItem(input) === null){
      return true
    }
  }

  render() {
 
      let jokes;
      if (typeof this.props.jokes !== 'undefined' && this.props.jokes.length > 0){
        jokes = (
          this.props.jokes.map( joke => (
            <div key={joke.value}>
              <h3>{joke.value}</h3>
            </div>
        )
      ))}else{
            jokes = (
              <div>
                  <h3>empty</h3>
              </div>
            )
      }
    return (
      <div>
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.." />
        <input type="submit" value="Submit" onClick={this.trimInput}/>
        { jokes }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jokes: state.jokes.jokes
});


export default connect(mapStateToProps, { fetchJokes })(Search);