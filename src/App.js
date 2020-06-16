import React,{ useState } from 'react';
import './App.css';
import Parent from './Parent'
import Child2 from './Child2'

import MyContext from  './MyContext';

function App() {

  let counter = useState(55);
  return (

    <MyContext.Provider value={counter}>

    <div>
  
      <Parent />
      {/* <Child2 /> */}
      
    </div>
    </MyContext.Provider>

  );
}

export default App;
