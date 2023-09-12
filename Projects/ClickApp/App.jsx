import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState('Click Me Please!');

  
  function handleClick() {

    if(message === 'Click Me Please!')
      setMessage('You have clicked me');

    else
      setMessage('Click Me Please!');
  }

  return (
    <div>
      <button onClick={handleClick}>{message}</button>
    </div>
  );
}

export default App;