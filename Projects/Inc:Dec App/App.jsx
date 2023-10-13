import { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [check, setCheck] = useState(false);
  

  function handleClick(event) {
    const { value } = event.target;

    if(check) {
      if(value === '+')
        setCount(count+1);

      else
        setCount(count-1);
    }
  }

  return (
    <div>
      <div>
        <p>Check: {check ? 'True' : 'False'}</p>  <br />
        <button onClick={() => setCheck(!check)}>Toggle</button>
      </div>
      <div>
        <p>Count: {count}</p>   <br />
        <button value='+' onClick={handleClick}>Increment</button>
        <button value='-' onClick={handleClick}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
