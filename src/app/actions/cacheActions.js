import { FETCH_CACHED_JOKES } from './types'
import { FETCH_CACHED_JOKES_FAIL } from './types'
import axios from 'axios'
import store from "./../store"

export const fetchCachedJokes = () => dispatch => {
        console.log("am here");
        
        var cachedJokes = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            cachedJokes.push(localStorage.getItem(keys[i]));
        }

        console.log(cachedJokes);
        dispatch({
            type: FETCH_CACHED_JOKES,
            payload: cachedJokes
    })
}