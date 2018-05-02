import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// api url
const api = "https://api.chucknorris.io/jokes/search?query=";
let resultsTable; // variable which will containt fetched results in html format to be rendered
let objectData;

class App extends Component {
  constructor(){
    super();
    this.state = {
      obejct: {
        value: "",
        pic: ""
      }
    };
  }

  // trims input and allows character and spaces only
  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = document.getElementById('searchInput').value.replace(regex, "");

    this.fetchres(input);
    
  }

  // fetches results of query
  fetchres = input => {    
    // check to see if its already cached
    if (localStorage.getItem(input) === null) {
      
      // cache it
      localStorage.setItem(input, JSON.stringify(this.searchQuery(input))); // store object with the key of it as the query used to find it
      console.log("what you store: " + this.searchQuery(Object.values(input)));
    }else{

      // retreive from local storage
      console.log("LOCALLY");
      this.getQueryFromLocal(localStorage.getItem(input));
    }
  }

  getQueryFromLocal = key => {
    
    this.fillTable(JSON.parse(localStorage.getItem(key)));
  }
  
  searchQuery = query => {

    let search = api + query;
    const req = new Request(search, {
      method: 'GET',
      cache: 'default'
    });

    fetch(req)
    .then((res) => res.json())
    .then(objectData => {

      // log obj for debugging
      console.log(Object.values(objectData));

      // fill html table with results
      this.fillTable(objectData);
        }
      )
      return Object.values(objectData);
    };

  // add data to html table
  fillTable = (data) => {
    let output = "";
    // loop through it
    var totalJokes = Object.keys(data.result).length;
    if (totalJokes >= 1){
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
        this.populateList();
    }else{
      this.emptyList();
      console.log("very few");
    }
      resultsTable += document.getElementById('results').innerHTML = output;
    }
    
    populateList  = () => {
      const resultlist = (
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
      ReactDOM.render(resultlist, document.getElementById('root'));
    }
    
    emptyList  = () => {
      const emptylist = (
        <div className="App">
                <label>Search: </label>
                <input id="searchInput" placehoder="Search anything" type="text"/>
                <button type="button" onClick={this.trimInput}>Submit</button>
                <table id="table">
                <tr>
                  <th>Icon</th>
                  <th>Quote</th> 
                </tr></table>
                <div>No results for what you searched</div>
            </div>
      );
      ReactDOM.render(emptylist, document.getElementById('root'));
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
                <div>Search for something</div>
            </div>
        
      );
    }
}
export default App;