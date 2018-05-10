import { GET_JOKES } from './types'
import { GET_JOKES_FAIL } from './types'
import { GET_JOKES_PENDING } from './types'
import store from "./../store"

let i = 0;
let key = "";
let obj = "";

// add it to localstorage
const addToStorage = (input, obj, key) => {
    localStorage.setItem(input, obj); // for returning results from cache quicker instead for fetching again

    localStorage.setItem(key + i++, input); // for storing queries
}

// check if user has already searched the same query
const exists = input => {
    if (localStorage.getItem(input) === null) {
        return false
    } else {
        return true;
    }
}

// get the jokes from localstorage
const getCached = (input) => {
    store.dispatch({
        type: GET_JOKES,
        payload: JSON.parse(localStorage.getItem(input))
    });
}

// display error messafe on screen
const giveErrorMessage = () => {
    store.dispatch({
        type: GET_JOKES_FAIL,
        payload: [{ id: 0, value: "And then Chuck Norris said 'something must have went wrong'.\n (He will let your query go uncached)" }]
    });
}

// check it there are http errors
const checkStatus = res => {
    if (!res.ok) {
        throw new Error(res.statusText);
    } else {
        return res.json();
    }
}

// display loading message
const loadingScreen = () => {
    store.dispatch({
        type: GET_JOKES_PENDING,
        payload: [{ id: 0, value: "Loading... \n in the meanwhile prepare for his coming." }]
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
                giveErrorMessage();
            })
    }
    else if (exists(input)) {
        localStorage.setItem(key + i++, input);
        
        getCached(input)
    }
    else {
        giveErrorMessage();
    }
}