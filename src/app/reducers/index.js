import { combineReducers } from "redux"
import searchReducer from "./searchReducer"
import cachedReducer from "./cachedReducer"

const comboReducers = combineReducers({
    jokes: searchReducer,
    cachedJokes: cachedReducer
});

export default comboReducers;