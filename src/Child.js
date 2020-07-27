import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(CounterContext) 
    return (
        <div>
            <h3>Counter Value is {counterValue[0]}</h3>
            <h4>Uses ContextAPI</h4>
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
            <hr></hr>
        </div>
    );
}

export default Child;