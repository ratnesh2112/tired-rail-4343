//create store here
import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as AuthReducer} from "./Auth/Reducer"




const rootReducer=combineReducers({AuthReducer})
const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE||compose;
export const store = legacy_createStore(rootReducer,
  composeEnhancers(applyMiddleware(thunk)));