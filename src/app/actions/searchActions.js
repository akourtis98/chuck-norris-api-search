import { FETCH_JOKES } from './types'

export const fetchJokes = e => dispatch => {
        fetch('https://api.chucknorris.io/jokes/search?query=man')
        .then(res => res.json())
        .then(jokes =>
            dispatch({
            type: FETCH_JOKES,
            payload: jokes.result
        }))
}