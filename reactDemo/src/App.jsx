import { useState } from "react";

function App() {
  console.log("App was called!");
  const [count, setCount] = useState(0);

  function incrementCount() {

  }

  return (
    <div id="element">
      {count}
      <button onClick={incrementCount}>Click me!</button>

      <div>Double my count is: {count * 2}</div>
    </div>
  )
}

export default App
