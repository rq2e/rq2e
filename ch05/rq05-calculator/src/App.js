import { useState } from "react";

const PLUS = (a, b) => a + b;
const MINUS = (a, b) => a - b;
const MULTIPLY = (a, b) => a * b;

function Calculator({ a, b }) {
  const [operator, setOperator] = useState(() => PLUS);
  return (
    <main>
      <h1>Calculator</h1>
      <button onClick={() => setOperator(() => PLUS)}>Plus</button>
      <button onClick={() => setOperator(() => MINUS)}>Minus</button>
      <button onClick={() => setOperator(() => MULTIPLY)}>Multiply</button>
      <p>
        Result of applying operator to {a} and {b}:
        <code> {operator(a, b)}</code>
      </p>
    </main>
  );
}

function App() {
  return <Calculator a={7} b={4} />;
}

export default App;
