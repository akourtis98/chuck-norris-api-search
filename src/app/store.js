import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import fetchUser from "./reducers/userReducer"

const middleware = applyMiddleware(promise(), thunk, logger)

export default createStore(fetchUser, middleware)