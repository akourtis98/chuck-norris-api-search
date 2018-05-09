import { GET_JOKES } from './types'
import { GET_JOKES_FAIL } from './types'
import { GET_JOKES_PENDING } from './types'
import store from "./../store"

let i = 0;
let key = "";
let obj = "";

const addToStorage = (input, obj, key) => {

    localStorage.setItem(input, obj); // for returning results from cache quicker instead for fetching again

    localStorage.setItem(key + i++, input); // for storing queries
}

const exists = input => {

    if (localStorage.getItem(input) === null) {
        return false
    } else {
        return true;
    }
}

const getCached = (input) => {
    store.dispatch({
        type: GET_JOKES,
        payload: JSON.parse(localStorage.getItem(input))
    });
}

const giveErrorMessage = () => {
    store.dispatch({
        type: GET_JOKES_FAIL,
        payload: [{ id: 0, value: "Something must have went wrong.\n (Your query will not be cached)" }]
    });
}

const checkStatus = res => {
    if (!res.ok) {
        throw new Error(res.statusText);
    } else {
        return res.json();
    }
}

const loadingScreen = () => {
    store.dispatch({
        type: GET_JOKES_PENDING,
        payload: [{ id: 0, value: "Loading..." }]
    });
}

export const searchJokes = input => dispatch => {
    loadingScreen();
    if (!exists(input)) {
        fetch('https://api.chucknorris.io/jokes/search?query=' + input)
            .then(res => checkStatus(res))
            .then(jokes => {
                obj = JSON.stringify(jokes.result);
                addToStorage(input, obj, key);
                dispatch({
                    type: GET_JOKES,
                    payload: jokes.result
                })
            })
            .catch(err => {
                //console.log(err);
                giveErrorMessage();
            })
    }
    else if (exists(input)) {
        localStorage.setItem(key + i++, input); // for storing queries

        getCached(input)
    }
    else {
        giveErrorMessage();
    }
}