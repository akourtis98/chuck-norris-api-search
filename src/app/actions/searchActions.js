import { FETCH_JOKES } from './types'
import { FETCH_JOKES_FAIL } from './types'
import { FETCH_JOKES_REJECT } from './types'
import axios from 'axios'
import store from "./../store"

export const fetchJokes = (input, accept) => dispatch => {
    console.log("am here");
    if (accept) {
            if (localStorage.getItem(input) === null) {

            fetch('https://api.chucknorris.io/jokes/search?query=' + input)
            .then(res => res.json())
            .then(jokes =>
            {
                localStorage.setItem(input,  JSON.stringify(jokes.result));
                console.log("did it")
                dispatch({
                    type: FETCH_JOKES,
                    payload: jokes.result
            })
        })
            .catch(err=> {
            console.log(err);
            dispatch({type: FETCH_JOKES_FAIL, 
            payload: [{id: 0, value: "Bad search"}]});
        })
    }else{
            console.log("here it goes: ")
            console.log(localStorage.getItem(input))
            dispatch({type: FETCH_JOKES, 
            payload: JSON.parse(localStorage.getItem(input))});
            console.log(localStorage.getItem(input))
        }
    }
    else{
        dispatch({type: FETCH_JOKES_REJECT, 
        payload: [{id: 0, value: "Please enter proper values"}]});
    }
}