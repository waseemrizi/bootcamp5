import React,{ useContext } from 'react';
import MyContext from './MyContext';


const Child = () => {

    const counterValue = useContext(MyContext);
  

    return (
        <div>
            <h1>This is child</h1>
            <h2>Value is: {counterValue[0]}</h2>

            <button onClick={
                () => { counterValue[1](++counterValue[0]) }}
            >Update</button>
        </div>
    )
}

export default Child;
