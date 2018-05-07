import { FETCH_JOKES } from './types'
import { FETCH_JOKES_FAIL } from './types'
import { FETCH_JOKES_REJECT } from './types'
import axios from 'axios'

export const fetchJokes = (input, accept) => dispatch => {
    if (accept) {
            fetch('https://api.chucknorris.io/jokes/search?query=' + input)
        .then(res => res.json())
        .then(jokes =>
            {
                console.log(jokes.result)
                dispatch({
                    type: FETCH_JOKES,
                    payload: jokes.result
        })
            //this.addToCache(jokes.result);
    })
        .catch(err=> {
            console.log(err);
            dispatch({type: FETCH_JOKES_FAIL, 
            payload: [{id: 0, value: "Bad search"}]});
        })
        }
    else{
        dispatch({type: FETCH_JOKES_REJECT, 
        payload: [{id: 0, value: "Please enter proper values"}]});
    }
}