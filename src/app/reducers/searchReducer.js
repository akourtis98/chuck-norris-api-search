import { FETCH_JOKES } from "../actions/types";

const initialState = {
    jokes: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_JOKES:
            return {
                ...state,
                jokes: action.payload
            }
        default:
            return state;
    }
}
