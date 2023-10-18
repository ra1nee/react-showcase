import {useState, useEffect} from 'react';
// dont modify state manually
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  // rule of thumb: second variable is just first variable but with set in front
  useEffect(() => {
    // setCounter(100);
    alert('Youve changed the counter to ' + counter)
  }, [counter]);
  // dependency array = empty, value set at start only 
  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
