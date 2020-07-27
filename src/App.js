import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App() {
  
  // let [count, setCount] = useState(10)
  let countState = useState(0)
  return (
    <CounterContext.Provider value={countState}>
    <div>
      <Parent/>
    </div>
    </CounterContext.Provider>
  )
}

export default App;
