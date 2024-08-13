import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [color, setColor] = useState('red');
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(()=> {
    setCalculation(() => count + 2);
  }, 
    [count]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <button type='button' onClick={()=> setColor('Blue')}>Blue</button>
          <button type='button' onClick={()=> setColor('Red')}>Red</button>
          <button type='button' onClick={()=> setColor('Yellow')}>Yellow</button>
          <button type='button' onClick={()=> setColor('Green')}>Green</button>
          <button type='button' onClick={()=> setCount((c)=> c + 1)}>Count</button>
        </div>        
        <p>
          Clicked color is {color}
          <br />Count is {count}, calculation is {calculation}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
