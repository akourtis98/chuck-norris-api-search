import { applyMiddleware, createStore} from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import comboReducers from "./reducers/index"

const initialState = {}

const middleware = [thunk]

const store = createStore(
    comboReducers,
    initialState,
    applyMiddleware(...middleware))

export default store