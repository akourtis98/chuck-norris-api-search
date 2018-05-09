import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from "react-redux"
import Footer from './footer';

export default class Cache extends React.Component {

    deleteFromCache = key => {
        localStorage.removeItem(key);
        this.forceUpdate();
    }

    render() {
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
        return (
            <div>
                <h1> { arrayOfInputs } </h1>
                <Footer />
            </div>
        )
    }
}