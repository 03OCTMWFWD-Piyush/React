import { useState } from "react"; 
import "./App.css";

function initialvalue(){
  log ("function called");
  return 0;
}

function App(){
  const[name,setName]= useState("king");
  const[flag,setflag]=useState(false); 
  const[steps,setsteps]=useState(0);  
  // const[steps,setsteps]=useState(initialvalue);
  const[names,setNames]=useState([]);  // Array //


  function changeName(){ 
    log("clicked");
    return setflag("flag");
  }   

  function increment(){
    setsteps ((prevstate) => prevstate + 1);
    setsteps((prevstate) => prevstate + 1);
  }

  function decrement(){
    return setsteps(steps_1);
  }

  function addNames(e){
    e.prevent0default ();
    setNames([...names,{id:names.length.name}]);
    setName("");
  }
    return(
      <div className="App">
        <div> Hello,{flag? name:""}</div>
        <button onclick = {changeName}>clicked</button>
        <hr/>
        <button onclick ={increment}>+</button>
        <div>{seteps}</div>
        <button onclick= {decrement}>-</button>
        <hr/> 

        <form onSubmit={addNames}>
        <input type="text" placeholder="add names" onChange={(e)=> setName(e.target.value)}></input> 
        <button>Submit</button>
        </form>
        <hr></hr> 
        <ul> 
          {names.map((item) =>{
            <li key={item.id}>{item.name}</li>   // Todo list //
          })}
          </ul>       
          </div>
        );
      }; 

        export default App;
