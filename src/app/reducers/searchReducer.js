import { GET_JOKES } from "../actions/types";
import { GET_JOKES_FAIL } from "../actions/types";
import { GET_JOKES_PENDING } from "../actions/types";

const initialState = {
    jokes: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_JOKES:
            return {
                ...state,
                jokes: action.payload
            }
        case GET_JOKES_FAIL:
            return {
                ...state,
                jokes: action.payload
            }
        case GET_JOKES_PENDING:
            return {
                ...state,
                jokes: action.payload
            }
        default:
            return state;
    }
}


