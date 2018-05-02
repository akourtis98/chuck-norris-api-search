import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// variable which holds the endpoint api
const api = "https://api.chucknorris.io/jokes/random";

class App extends Component {
  constructor(){
    super();
    this.state = {
      values: "",
      id: ""
    };
  }

  validateInput = () => {
    let badInput;
    // check input if false fetchres () else alert message!
    fetchres();
  }

  fetchres = () => {
    let output;
    const req = new Request(api, {
      method: 'GET',
      cache: 'default'
    });
    fetch(req)
    .then((res) => res.json())
    .then((data) => {
      console.dir(data.value)
      console.dir(data.icon_url) 
      this.fillTable(data.value, data.icon_url);
    }).catch(err =>  {
      console.log("ERROR: "+ err);
    })
    
  }

  fillTable = (val, icon) => {
    document.getElementById('results').innerHTML = `<table style="width:50%; margin: auto">
    <tr>
      <th>Picture</th>
      <th>Quote</th> 
    </tr>
    <tr>
      <td><img src=${icon}></td>
      <td>${val}</td> 
    </tr>
  </table>` //val + "<br>" + id;
  }

  render() {
    return (
      <div className="App">
          <form name="input" action="" placeholder="Search something">
              <label>Search: </label>
              <input id="searchInput" type="text"/>
              <button type="button" onClick={this.validateInput}>Submit</button>
          </form>
          <div id="results">
          
            It seems that there are no results.
          </div>
      </div>
    );
  }
}

export default App;