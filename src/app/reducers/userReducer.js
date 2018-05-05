import axios from "axios"

export default function reducer (state={
    user: {
        name: "Bill"
    },
    fetching: false,
    fetched: false,
    error: null,
    }, action) {
        return {
            ...state,
            fetching: true
        }
    }