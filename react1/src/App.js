import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const data = [
    { id: 1, name: 'Use Array.map' },
    { id: 2, name: 'Not a for loop' },
    { id: 3, name: 'Give each item a unique key' },
    { id: 4, name: 'Avoid using array index as the key' },
  ];

  // State to keep track of checked items
  const [checkedItems, setCheckedItems] = useState({});

  // Handle checkbox change
  const handleCheckboxChange = (itemId) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  function increment() {
    return setNumber(number + 1)
  }
  function decrement() {
    return setNumber(number - 1)
  }
  function reset() {
    return setNumber(0)
  }


  return (
    <div className="App">
      <header id='header'>
        <div className='container'>
          <h1>React - Components, State, Props</h1>
        </div>
        <br />
        <hr />
      </header>
      <section>
        <div className='container'>
          <h2>React JS Intro</h2>
          {/* que-and 1 starts here */}
          <div id='que1'>
            <h2>1. What is React Js?</h2>
            <p className='ans'>
              React is a JavaScript library for building user interfaces
              <ul>
                <li>Declarative - React makes it painless to create interactive UIs.</li>
                <li>Component Based - Build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
                <li>Learn Once, Write Anywhere - React can also render on the server using Node and power mobile apps using React Native.</li>
              </ul>
            </p>
          </div>
          {/* que-and 2 starts here */}
          <div id='que2'>
            <h2>2. What is NPM in React Js?</h2>
            <p className='ans'>
              NPM is short for node package manager, an online directory that contains the various already registered open-source packages.
              <br />
              It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies.
            </p>
          </div>
          {/* que-and 3 starts here */}
          <div id='que3'>
            <h2>3. What is Role of Node Js in react Js?</h2>
            <p className='ans'>
              There are several reason which define the role of Node js in react JS-
              <br />
              <ol>
                <li>High server load - web application needs handling of multiple requests and maintaining server load balance.</li>
                <li>Real time data - If your application’s core is based on Real-time Data-Intensive management or Data Streaming, Nodejs is highly advisable for continued server connection.</li>
                <li>JSON APIs - Building JSON APIs for your application is very efficient with Nodejs due to high code reusability and easy code sharing in Reactjs.</li>
                <li>Single Page Application(SPA) - Developing SPA in React while using Node to build a lightweight backend model for asynchronous data loading through callback functions.</li>
                <li>MERN Stack - Nodejs can also be used with React with MERN (MongoDB, Express, React, and Nodejs) stack.</li>
              </ol>
            </p>
          </div>
          {/* que-and 4 starts here */}
          <div id='que4'>
            <h2>4. What is CLI command In React Js?</h2>
            <p className='ans'>
              CLI stands for Command Line Interface.
              <br />
              A CLI is a text-based user interface (UI) used to run programs, manage computer files and interact with the computer.
              <br />
              Command-line interfaces are also called command-line user interfaces, console user interfaces and character user interfaces.
            </p>
          </div>
          {/* que-and 5 starts here */}
          <div id='que5'>
            <h2>5. What is Components in React Js?</h2>
            <p className='ans'>
              Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
              <br />
              A Component is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier.
              <br />
              Components come in two types
              <br />
              (1) Function components - Functional components are simply javascript functions.
              <br />
              (2) Class components - The class components are a little more complex than the functional components.
            </p>
          </div>
          {/* que-and 6 starts here */}
          <div id='que6'>
            <h2>6. What is Header and Content Components in React Js?</h2>
            <p className='ans'>
              <ul>
                <li>Header Component - Headers are compositions that extend standard navbar functionalites. They contain additional components like jumbotron, sub-navbar, or image covers which serve as a containers for extra navigation elements - usually links, forms, or call-to-action buttons.</li>
                <li>Content Component - Content Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
                  <br />
                  Components come in two types, Class components and Function components.
                </li>
              </ul>
            </p>
          </div>
          {/* que-and 7 starts here */}
          <div id='que7'>
            <h2>7. How to install React Js on Windows, Linux Operating System ? How to Install NPM and How to check version of NPM?</h2>
            <p className='ans'>
              <dl>
                <dt>install React JS in windows</dt>
                <dd>
                  step-1 - install Node.js<br />
                  step-2 - go to directory where u want to create react app<br />
                  step-3 - open terminal and run this command "npx create-react-app (project name)"<br />
                  step-4 - "cd (project name)"<br />
                  step-5 - to start your app run this command "npm start"
                </dd><br />
                <dt>install React JS in Linux OS</dt>
                <dd>
                  install react through your terminal using following command
                  step-1 - "sudo apt install nodejs" for install node js<br />
                  step-2 - "sudo apt install npm" its package manager for nodejs<br />
                  step-3 - "npx create-react-app (project name)" create react project<br />
                  step-4 - "cd (project name)"<br />
                  step-5 - "npm start" to run the project
                </dd><br />
                <dt>install NPM and check its version</dt>
                <dd>
                  for widows - install "npm install -g create-react-app"; version check "create-react-app --version"
                  <br />
                  for linux os - install "sudo apt install npm"; version check "npm -v"
                </dd>
              </dl>
            </p>
          </div>
          {/* que-and 8 starts here */}
          <div id='que8'>
            <h2>8. How to check version of React Js?</h2>
            <p className='ans'>
              To check which React version is your project using,
              <dl>
                <dt>package.json file</dt>
                <dd> - You need to open the 'package.json'. Take a look under the dependencies section. It should list all of the dependencies of your project and one of those should be React.</dd>
                <br />
                <dt>command line</dt>
                <dd> - "npm view react version"</dd>
                <br />
                <dt>the version property of default import from react</dt>
                <dd> - pass this command line in your react app "React.version"</dd>
              </dl>
            </p>
          </div>
          {/* que-and 9 starts here */}
          <div id='que9'>
            <h2>9. How to change in components of React Js?</h2>
            <p className='ans'>
              A component is updated whenever there is change in component's state or props.
              <br />
              React has five built-in methods that gets called, in this order, when a component is updated:
              <ol>
                <li>getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
              </ol>
              The render() method is required and will always be called, the others are optional and will be called if you define them.
            </p>
          </div>
          {/* que-and 10 starts here */}
          <div id='que10'>
            <h2>10. How to Create a List View in React Js?</h2>
            <p className='ans'>
              <h3>The "React Way" to Render a List</h3>
              <div className='box'>
                {data.map((item) => (
                  //  Use the 'id' field as the unique key for each list item
                  <div key={item.id}>
                    <input
                      type="checkbox"
                      checked={checkedItems[item.id] || false}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            </p>
          </div>
          {/* que-and 11 starts here */}
          <div id='que11'>
            <h2>11. Create Increment decrement state change by button click?</h2>
            <p className='ans'>
              <h3>React Web Counter</h3>
              <div className='box counter'>
                {number}
                <br />
                <button onClick={increment} id='add'>Increment</button>

                <button onClick={decrement} id='sub'>Decrement</button>
                <br />
                <button onClick={reset} id='zero'>Reset</button>
              </div>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;