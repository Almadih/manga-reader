import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(combineReducers(rootReducer), composedEnhancer);
export default store;
