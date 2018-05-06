import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { FETCH_JOKES } from './types'

export function fetchJokes(e) {
    return axios.get('https://api.chucknorris.io/jokes/search?query=' + e);
}
