import { useState } from "react";
import "./App.css";

let counter = 0;
function App() {
  const [message, setMessage] = useState('The Button Has Not Been Clicked.');

  
  function handleClick() {
    counter = counter+1;

    if (counter === 1)
      setMessage('You Have Clicked The Button Once.');
    else if (counter === 2)
      setMessage('You Have Clicked The Button Twice');
    else
      setMessage(`You Have Clicked The Button ${counter} times.`);
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleClick}>Click!</button>
    </div>
  );
}

export default App;
