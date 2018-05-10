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
                let currentObj = { value: localStorage.getItem("" + i), key: i }
                arrayOfInputs.push(currentObj);
            }
        }

        arrayOfInputs = (
            arrayOfInputs.map(joke => (
                <tr>
                    <td id="deleteBtn" onClick={func => {
                        this.deleteFromCache(joke.key)
                    }} key={joke.key}>Delete</td>
                    <td>
                        {joke.value}
                    </td>

                </tr>
            )))

        return (
            <div id="container">

                <table>
                    <tr>
                        <th>Action</th>
                        <th>Your query</th>
                    </tr>

                </table>
                <hr/>
                <table>
                    {arrayOfInputs}
                </table>
                <Footer />
            </div>
        )
    }
}