import { useState } from 'react';
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <main>
      <p>Counter: {counter} <small>[{Math.random()}]</small></p>
      <button
        onClick={() => setCounter(value => value + 1)}
      >
        Increment
      </button>
      <button
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </main>
  );
}
function App() {
  return <Counter />;
}
export default App;
