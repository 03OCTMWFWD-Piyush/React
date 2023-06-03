import './App.css';

function App() {
  return (
    <div className="App">
      <div className='App-header'>Hello World</div>
      <App1 />
      <App2 />
    </div>
  );
}

function App1() { 
  return (
    <div className='App'>
      <div className='App-header'>
        My Name Is Piyush
      </div>
    </div> 
  )
}


function App2() {
  return (
    <div className='App'>
      <div className='App-header'>
        <ul>  
          <li>I Am 21 year old</li>
        </ul>
      </div>
    </div>
  )
} 

export default App; 
// export {App, App1}; 

