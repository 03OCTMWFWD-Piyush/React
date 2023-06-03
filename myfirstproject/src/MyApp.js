import './App.css';

function App() {
    return (
        <div className='App'>
            <div className='App-header'>
                Hello React Js 
                <Movies />

            </div>

        </div>
    );
} 


function Movies() { 
    return (
        <div className="App">
            <div className='App-header'>
                <ul>
                    <li>The kerala story</li>
                </ul>

            </div>

        </div>
    );
}

export default App;