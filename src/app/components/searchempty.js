import React, { Component } from 'react'

export default class SearchEmpty extends React.Component {

  render() {
    return (
        <div>
        <input id="input" type="text" placeholder="Search something.." />
        <input type="submit" value="Submit"/>
        <h1> empty list </h1>
        </div>
    )
  }
}