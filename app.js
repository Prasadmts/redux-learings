// counter application:
import store from "./store.js";
import {increment, decrement, reset} from './actions/CounterActionCreator.js';

// i can get the value only via store

console.log("line 7", store.getState()); // getState() gives the initial value

// to get the updated value subscribe to store :
store.subscribe(
    () => {
        console.log('updated value', store.getState());
    }
)

store.dispatch(increment()) // dispath() 
store.dispatch(decrement())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(reset())