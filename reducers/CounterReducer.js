import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes.js"

let counterInitialState = 0

const CounterReducer = (state=counterInitialState, actions) => { // two paramters -> state & action
    
    // mostly switch case to be used :
    switch(actions.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
            
    }

}

export default CounterReducer;