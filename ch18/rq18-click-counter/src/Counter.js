import { useState } from "react";

function Counter({ start = 0 }) {
  const [counter, setCounter] = useState(start);
  const update = (delta) => () => setCounter((value) => value + delta);
  return (
    <main>
      <h1>Counter: {counter}</h1>
      <button onClick={update(1)}>Increment</button>
      <button onClick={update(-1)}>Decrement</button>
    </main>
  );
}

export default Counter;
