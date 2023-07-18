
import { useCallback, useMemo, useState } from 'react';
import './App.css';
import List from './List';




function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const getItems=() =>{
  //   return [number,number+1,number+2];
  // } 

  // const getItems=useCallback(()=>{
  //   return[number,number+1,number+2];
  // },[number]);


  // const getItems=useMemo(()=>{   
  //   return[number,number+1,number+2];
  // },[number]);   


  const getItems = useCallback((incrementor) => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor];
  }, [number]);

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : '#333'
  }
  return (
    <div className="App">
      <div style={theme}>
        <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))} />
        <button onClick={() => setDark(prevDark => !prevDark)}>Theme change </button>
        <List getItems={getItems} />
      </div>
    </div>
  );

}


export default App;  
