// import React from "react";
// import { useState } from "react";


// function App() {
//   const[name,setName]=useState('pushpa');
//   function changeName(){ 
//     console.log("you have click the function");
//     setName("sankeerth");
//   }
//   return( 
//     <div className="App">
//       <div>Hello,{name}</div>
//       <button onClick={changeName}>clickme</button>  

//     </div>
//   );
// }
// export default App;    


import React from "react";
import { useState } from "react"; 

function App(){
  const [name,setName]= useState('pushpa');
  const [flag,setflag] = useState(false);
  const [steps,setsteps] = useState(0);

  function changeName(){
    console.log("you have cliked the function");
    setName ("king");  
    setflag(!flag);
  }
  function increment(){
    // setsteps (steps +1);  
    // setsteps (steps +1); 

    setsteps((prevstate) => prevstate +1);
    setsteps((prevstate) => prevstate +1);

  }
  function decrement(){
    return setsteps(steps -1);
  }
  return(
    <div className="App">
      <div>Hello,{flag? name:""}</div>
      <button onClick={changeName}>clickme</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <div>{steps}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;


  


