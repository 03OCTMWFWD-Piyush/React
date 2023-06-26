import './App.css';
import React from 'react';
import FunctionalComponent from './FunctionalComponents/FunctionalComponent';
import { useState } from 'react';

function App(){
    const [flag,setflag]=useState(true);
    return(
        <div className='App'>
            <div>
                <button onClick={() => setflag(!flag)}> functional component with Toggle   </button>
            </div> 
            {flag ? <FunctionalComponent />:""}
        </div>
    );
}

export default App; 
