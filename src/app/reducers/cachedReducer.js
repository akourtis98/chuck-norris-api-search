import { FETCH_CACHED_JOKES } from "../actions/types";

const initialState = {
    cachedJokes: []
};

export default function(state = initialState, action) {
            switch(action.type) {
                case FETCH_CACHED_JOKES:
                    return {
                        ...state,
                        cachedJokes: action.payload
                    }
                default:
                    return state;
            }
}