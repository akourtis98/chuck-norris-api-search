import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import { searchJokes } from '../actions/searchActions';
import { connect } from "react-redux"
import '../css/style.css'
import Footer from './footer';

let jokes;
let table;

class Search extends React.Component {

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != "") {
      this.props.searchJokes(input)
    }
  }

  render() {
    if (typeof this.props.jokes !== 'undefined' && this.props.jokes.length > 0) {

      jokes = (
        this.props.jokes.map(joke => (
          <tr>
            <p key={joke.value}> </p> 
            <td><img src={joke.icon_url}/></td>
            <td>{joke.value}</td>
          </tr>
          )
        ))
        
    } else {
      jokes = (
        <div>
          And then Chuck said 'Either there are no results for what you searched or havent queried anything yet.'
        </div>
      )
    }
    return (
      <div id="containerOfSearch">
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.." />
        <input type="submit" value="Search" onClick={this.trimInput} />
        <table>
          <tr>
            <th>Icon</th>
            <th>Joke</th>
          </tr>
        </table>
        <table>
        {jokes}
        </table>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jokes: state.jokes.jokes
});


export default connect(mapStateToProps, { searchJokes })(Search);