
const MyReducer = (state, action) => {
    console.log(state)

    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;
            

    
    }
}

export default MyReducer;
