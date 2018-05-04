import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './style.css';

// api url
const uri = "https://api.chucknorris.io/jokes/search?query="; // api endpoint
let data; // variable which holds response.json() object

// components 
import Home from './home';
import Cache from './cache';

class Search extends React.Component {
  constructor(){
    super();
  }

  // trims input and allows character and spaces only
  trimInput = () => {
    var regex = /[^a-z ]/gi;
    let input = document.getElementById('searchInput').value.replace(regex, "");

    console.log("to be validated: " + input)
    this.validateStorage(input);
  }

  // check if it exists locally or not
  validateStorage = input => {
    if (localStorage.getItem(input) === null){
      let promise = this.postData(input);
      console.dir(data);
    }
    else{
      let obj = JSON.parse(localStorage.getItem(input));
      console.log(obj);
      this.createHtmlTable(obj);
    }
  }

  postData = q => {

    let query = uri + q;
    let h = new Headers();
    h.append('Accept', 'application/json');

    let req = new Request(query, {
      method: 'GET', 
      headers: h,
      mode: 'cors'
    });

    fetch(req)
      .then(  (response) => {
          if (response.ok){
            return response.json();
          }else{
            // catch respose statuses later
            throw new Error("bad HTTP");
          }
      })
      .then(  (jsonData) => {
        // save jsonData and input in local storage
        localStorage.setItem(q, JSON.stringify(jsonData));
        console.log(jsonData);
        this.createHtmlTable(jsonData);
      })
      .catch( (err) => {
        this.emptyList();
        console.log('ERROR' , err.message);
      });
  }

  // add data to html table
  createHtmlTable = (data) => {
    let containerOfTable = document.getElementById('table');
    let resultsTabe = "";
    // loop through it
    var totalJokes = Object.keys(data.result).length;

    if (totalJokes >= 1){

      try{
        for ( var i = 1; i <= 10; i++){

          resultsTabe += 
            `<table style="width:50%;">
              <tbody>
                <tr>
                  <td style="width:20%";><img src=${data.result[i].icon_url}></td>
                  <td style="width:80%";>${data.result[i].value}</td>
                </tr>
                </tbody>
              </table>
            `
          }
      }catch(err) {
        document.getElementById("results").innerHTML = err.message;
      }
      this.populateList();
    }
    else{
      // containerOfTable.innerHTML = "empty";
      // this.populateList();
      }
      document.getElementById('results').innerHTML = resultsTabe;
    }
    
    renderList = (list) => {
      ReactDOM.render(list, document.getElementById('root'));
    }
    
    populateList  = () => {
      const resultlist = (
        <div className="App">
                <table id="table">
                <tr>
                  <th>Icon</th>
                  <th>Quote</th> 
                </tr></table>
                <div id="results"></div>
            </div>
      );
      ReactDOM.render(resultlist, document.getElementById('table'));
    }
    
    emptyList  = () => {
      const emptylist = (
        <div className="App">
                <table id="table">
                <tbody>
                <tr>
                  <th>Icon</th>
                  <th>Quote</th> 
                </tr>
                </tbody>
                </table>
                <div>No results for what you searched</div>
            </div>
      )
      ReactDOM.render(emptylist, document.getElementById('table'));
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
                </tr>
                <div>Search for something</div>
                </table>
            </div>

      )
    }

}

export default Search;