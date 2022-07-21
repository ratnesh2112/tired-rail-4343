

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { articleReducer } from "./reducer";




export const rootReducer = combineReducers({

    articles:articleReducer

})







export const store = legacy_createStore(rootReducer,
    applyMiddleware(thunk))

