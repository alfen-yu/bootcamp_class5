const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1 

        default:
            console.log("What we know is a drop, what we don't know is an ocean."); 
    }
}

export default CounterReducer;