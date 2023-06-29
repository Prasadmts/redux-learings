// role of store -> to store the state variable
// createStore helps to create gobal object in case of redux


import { createStore } from "redux";
import CounterReducer from "./reducers/CounterReducer.js";

const store = createStore(CounterReducer); // store the state variable


export default store;

// store is a replacement for createcontext() in React

// store -> keeping the state updates and also reducer functions(state, action)
// dipatch() role -> just pass the actions in app.js
