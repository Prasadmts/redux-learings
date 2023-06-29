// action creators : it is a function that will return the action object.
// action is an object by default


import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const reset = () => {
    return {
        type: RESET
    }
}

// functions returning objects , this objects are called actions
