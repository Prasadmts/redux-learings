import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes.js"

let counterInitialState = 0

const CounterReducer = (state=counterInitialState, actions) => { // two paramters -> state & action
    
    // mostly switch case to be used :
    switch(actions.type) {
        case INCREMENT:
            return state + actions.payload;
        case DECREMENT:
            return state - actions.payload;
        case RESET:
            return 0;
        default:
            return state;
            
    }

}

export default CounterReducer;