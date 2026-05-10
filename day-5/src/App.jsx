import { use, useState } from "react";

import "./button.css";

function App() {
  let [count, setCount] = useState(0);
  // let counter = 7;

  function increaseValue() {
    // count++;
    // console.log(count);
    // setCount(count++);
  }

  return (
    <>
      <h1>React counter</h1>
      <p>Counter value: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase value</button>
      <button onClick={() => setCount(count - 1)}>Decrease value</button>
    </>
  );
}

export default App;
