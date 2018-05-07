import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import axios from 'axios'
import PropTypes from "prop-types"
import { fetchJokes } from '../actions/searchActions';
import { connect } from "react-redux"

class Search extends React.Component {
  componentWillMount() {
    this.props.fetchJokes();
  }

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != ""){
      if(this.notCached(input)){
        this.addToCache(input)
        console.log("state:" + this.state.jokes)
        // this.renderListFromCache(this.state.jokes)
      }else{
        //this.renderListFromCache(JSON.parse(localStorage.getItem(input)))
        console.log("already")
        console.log(JSON.parse(localStorage.getItem(input)))
        
      }
    }else{
      console.log("enter proper values")
    }  
  }

  addToCache = (input) => {
    console.log("to be cached: " + input)
  }

  notCached = (input) => {
    if (localStorage.getItem(input) === null){
      return true
    }
  }

  render() {
    const jokes = this.props.jokes.map( joke => (
      <div key={joke.id}>
        <h3>{joke.value}</h3>
      </div>
    ));
    return (
      <div>
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.." />
        <input type="submit" value="Submit" onClick={this.trimInput} />
        { jokes }
      </div>
    )
  }
}

// Search.propTypes = {
//   fetchJokes: PropTypes.func.isRequired,
//   jokes: PropTypes.array.isRequired
// }

const mapStateToProps = state => ({
  jokes: state.jokes.jokes
});


export default connect(mapStateToProps, { fetchJokes })(Search);