// store is for state management
import {
    legacy_createStore as createStore,
     combineReducers, 
     applyMiddleware, 
     compose
    } from "redux";
import thunk from "redux-thunk";

const reducer = combineReducers({});
// cart reducer, login reducer

let initialState = {};
//default page

const composeenhancers = 
    window.AbortController._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    //to check if browser have DEVTOOLS extension for redux if not then by default it uses compose function
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState, 
    composeenhancers(applyMiddleware(...middleware))
);
//created store with reducer, initialStae and middlewares

export default store;

