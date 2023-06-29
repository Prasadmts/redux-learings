// action creators : it is a function that will return the action object.
// action is an object by default


import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

export const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value // payload is basically a value
    }
}

export const decrement = (value) => {
    return {
        type: DECREMENT,
        payload: value
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

// functions returning objects , this objects are called actions
