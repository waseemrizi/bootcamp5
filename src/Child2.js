import React, { useReducer } from 'react'
import Myreducer from './MyReducer';


const Child2 = () => {
  let  inittialState =15
            const [state, dispatch] = useReducer(Myreducer, inittialState);
     
        console.log(state)
        console.log(inittialState)
    return (
        <div>
            <h1>Child two is here</h1>
            <h2>value of:{state} </h2>

            <button onClick={ ()=> dispatch('increment') } >increment</button>
            <br/>

            <button onClick={ ()=> dispatch('decrement') }>decrement</button>
        </div>
    )
}

export default Child2
