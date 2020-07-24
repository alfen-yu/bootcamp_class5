import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(CounterContext) 
    return (
        <div>
            <h3>Counter Value is {counterValue[0]}</h3>
            
            <button onClick={() => {counterValue[1](++counterValue[0])}}>Increment</button>
        </div>
    );
}

export default Child;