import React, {useContext} from 'react';
import CounterContext from './CounterContext';

const Child = () => {

    let counterValue = useContext(CounterContext) 
    console.log(counterValue)
    return (
        <div>
            <h1>Hello</h1>
            <h3>Counter Value is {counterValue}</h3>
        </div>
    );
}

export default Child;