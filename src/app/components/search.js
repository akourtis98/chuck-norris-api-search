import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import PropTypes from "prop-types"
import { searchJokes } from '../actions/searchActions';
import { connect } from "react-redux"
import renderHTML from 'react-render-html';

class Search extends React.Component {

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != ""){
        this.props.searchJokes(input)
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
                  <h3>Either there are no results for what you searched for or havent queried anything yet.</h3>
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


export default connect(mapStateToProps, { searchJokes })(Search);