import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import './style.css'
import axios from 'axios'

export default class Search extends React.Component {
  state = {
    results: []
  }

  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/search?query=man')
      .then(res => {
        console.log(res.data)
        this.setState({ results: res.data.result})
      })
  }

  render() {
      return (
        <ul> {this.state.results.map(result => (
          <li key={result.id}>{result.value}</li>
        ))}
        </ul>
      )
    }
  }