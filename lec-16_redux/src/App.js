import { useState } from 'react';
import './App.css';



function App() {
  const [number,setNumber] = useState(0);
  

function add(){
  return setNumber(number + 1)  
}

function minus(){
  return setNumber(number - 1)
}

  return(
    <div className='"App'>
      <h1>welcome to Redux</h1>   
      <hr />
      <button onClick={add}>+</button>
      <di>{number}</di>
      <button onClick={minus}>-</button>
    </div>    
  );    
}      

export default App;                                                  
