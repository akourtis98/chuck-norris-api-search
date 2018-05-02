import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// api url
const api = "https://api.chucknorris.io/jokes/search?query=";
let resultsTable; // variable which will containt fetched results in html format to be rendered

class App extends Component {
  constructor(){
    super();
    this.state = {
      // initialize properties of obejct
      values: "",
      id: ""
    };
  }

  // trims input and allows character and spaces only
  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = document.getElementById('searchInput').value.replace(regex, "");
    console.log("user input is: " + input);

    this.fetchres(input); // after user input is trimmed do fetching
    input = "";
  }

  // fetches results of query
  fetchres = input => {
    let search = api + input;
    const req = new Request(search, {
      method: 'GET',
      cache: 'default'
    });

    fetch(req)
    .then((res) => res.json())
    .then(data => {

      // log obj for debugging
      console.log(Object.values(data));

      // fill html table with results
      this.fillTable(data);

        }).catch(err =>  {      
        console.log("ERROR: "+ err);
      })
    };

  // add data to html table
  fillTable = (data) => {
    // loop through it
    var totalJokes = Object.keys(data.result).length;
    let output;
    for ( var i = 1; i <= 10; i++){
        output += 
        `<table style="width:50%;">
          <tr>
            <td style="width:20%";><img src=${data.result[i].icon_url}></td>
            <td style="width:80%";>${data.result[i].value}</td>
          </tr>
          </table>
        `
      }
      resultsTable += document.getElementById('results').innerHTML = output;
    }
  

  render() {
    return (
      <div className="App">
              <label>Search: </label>
              <input id="searchInput" placehoder="Search anything" type="text"/>
              <button type="button" onClick={this.trimInput}>Submit</button>
              <table id="table">
              <tr>
                <th>Icon</th>
                <th>Quote</th> 
              </tr></table>
              <div id="results"></div>
          </div>
      
    );
  }
}
export default App;