import { FETCH_JOKES } from './types'
import { FETCH_JOKES_FAIL } from './types'
import { FETCH_JOKES_REJECT } from './types'
import axios from 'axios'
import store from "./../store"

let i = 0; 

export const fetchJokes = (input, accept) => dispatch => {
    //increment this key to be stored as value il storage
    console.log("am here");
    if (accept) {
        if (localStorage.getItem(input) === null) {

            fetch('https://api.chucknorris.io/jokes/search?query=' + input)
                .then(res => res.json())
                .then(jokes => {
                    i = i + 1;
                    let key = ""+i;
                    console.log(key);
                    console.log(jokes.result.key_input);
                    const obj = JSON.stringify(jokes.result);
                    localStorage.setItem(input, obj);
                    localStorage.setItem(key, input); // add i as key for the input value
                    console.log("UNDER ME:");
                    console.log(localStorage.getItem(""+i));
                    console.log(obj);
                    dispatch({
                        type: FETCH_JOKES,
                        payload: jokes.result
                    })
                })
                .catch(err => {
                    console.log(err);
                    dispatch({
                        type: FETCH_JOKES_FAIL,
                        payload: [{ id: 0, value: "Bad search" }]
                    });
                })
        } else {
            i = i + 1;
            let key = ""+i;
            localStorage.setItem(key, input);
            console.log("here it goes: ")
            console.log(localStorage.getItem(input))
            dispatch({
                type: FETCH_JOKES,
                payload: JSON.parse(localStorage.getItem(input))
            });
            console.log(localStorage.getItem(input))
        }
    }
    else {
        dispatch({
            type: FETCH_JOKES_REJECT,
            payload: [{ id: 0, value: "Please enter proper values" }]
        });
    }
}