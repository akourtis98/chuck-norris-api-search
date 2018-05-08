import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"

export default class Cache extends React.Component {

    deleteFromCache = key => {
        localStorage.removeItem(key);
        console.log("this got removed :" + key)
        this.forceUpdate();
    }

    render() {
        // refresh
        // this.forceUpdate();

        // load it and to var
        let arrayOfInputs = [];

        for (var i = 0, len = localStorage.length; i < len; ++i) {
            if (localStorage.getItem("" + i)) {
                let currentObj = {value: localStorage.getItem("" + i), key:i }
                arrayOfInputs.push(currentObj);
            }
        }

        arrayOfInputs = (
            arrayOfInputs.map(joke => (
                <div onClick={func => {
                    this.deleteFromCache(joke.key)
                }} key={joke.key}>
                    <h3>{joke.value}</h3>
                </div>
            )))
        // map it and load it
        return (
            <div>
                <h1> { arrayOfInputs } </h1>
            </div>
        )
    }
}

// arrayOfInputs = (
//     arrayOfInputs.map( => joke => (
//     <div key={joke}>
//         <h3>{joke}</h3>
//     </div>
// ))