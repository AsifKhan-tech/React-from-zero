import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  // const counter = 1;

  function incrementValue() {
    setCounter((prevCounter) => prevCounter + 1); //latest value of queue
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrementValue() {
    if (counter <= 0) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Day:-8</h1>
      <h2>Counter Value: {counter}</h2>
      <div>
        <button onClick={incrementValue}>Increment: {counter}</button>
        <br />
        <br />
        <button onClick={decrementValue}>Decrement: {counter}</button>
      </div>

      <footer style={{ marginTop: "20px" }}>Footer: {counter}</footer>
    </>
  );
}

export default App;
