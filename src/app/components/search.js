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

  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = this._name.value.replace(regex, "");

    if (input != ""){
      if(this.notCached(input)){
        this.addToCache(input)
      }else{
        this.renderListFromCache(JSON.parse(localStorage.getItem(input)))
        console.log("already")
        console.log(JSON.parse(localStorage.getItem(input)))
        //this.renderListFromCache()
      }
    }else{
      console.log("enter proper values")
    }  
  }

  addToCache = (input) => {
    console.log("to be cached: " + input)
    this.componentDidMount(input)
  }

  notCached = (input) => {
    if (localStorage.getItem(input) === null){
      return true
    }
  }

  componentDidMount(e) {
    fetchJokes(e)
      .then(res => {
        console.log(res.data)
        this.setState({ results: res.data.result })
        localStorage.setItem(e, JSON.stringify(res.data));
      })
      .catch(error => { console.log("something mustve went wrong") }
      )
  }

  renderListFromCache = obj => {
    this.setState({ results: obj.result })
    return (
      <ul> {obj.map(result => (
        <li key={result.id}>{result.value}</li>
      ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <input id="input" type="text" ref={input => this._name = input} placeholder="Search something.." />
        <input type="submit" value="Submit" onClick={this.trimInput} />
      </div>
    )
  }
}

{/* <ul> {this.state.results.map(result => (
          <li key={result.id}>{result.value}</li>
        ))}
        </ul> */}