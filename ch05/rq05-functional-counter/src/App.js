import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter((value) => value + 1)}>
        Increment
      </button>
    </main>
  );
}

function App() {
  return <Counter />;
}

export default App;
