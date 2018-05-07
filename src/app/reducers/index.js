import { combineReducers } from "redux"
import searchReducer from "./searchReducer"

const comboReducers = combineReducers({
    jokes: searchReducer
});

export default comboReducers;