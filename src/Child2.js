import React, {useReducer} from 'react';
import CounterReducer from './CounterReducer';

const Child2  = () => {

    let [state, dispatch] = useReducer(CounterReducer, 0)
    console.log(state)
    return (
        <div>
            <h3>Value of Reducer state : {state}</h3>
            <h4>Uses Reducer</h4>
            <button onClick={()=>dispatch('INCREMENT')}>Increment</button>
        </div>
    )
}

export default Child2;