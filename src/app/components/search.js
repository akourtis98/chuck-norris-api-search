import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import axios from 'axios'
import { fetchJokes } from '../actions/searchActions';

export default class Search extends React.Component {
    
  state = {
    results: []
  }

  validateInput = (e) => {
    const name = this._name.value
    console.log(name)
  }
  componentDidMount() {
    fetchJokes()
      .then(res => {
        console.log(res.data)
        this.setState({ results: res.data.result})
      })
      .catch(error => { console.log("something mustve went wrong")}
      )}

  render() {
      return (
        <div>
            <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.."/>
            <input type="submit" value="Submit"  onClick={this.validateInput.bind(this)}/>
        </div>
      )
    }
  }

  {/* <ul> {this.state.results.map(result => (
          <li key={result.id}>{result.value}</li>
        ))}
        </ul> */}