

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { articleReducer } from "./reducer";
import {reducer} from "./Auth/Reducer"




export const rootReducer = combineReducers({

    articles:articleReducer,
    Auth:reducer

})







export const store = legacy_createStore(rootReducer,
    applyMiddleware(thunk))

