import { useState } from 'react';

const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  PRODUCT: (a, b) => a * b,
};

function Calculator({a, b}) {
  const [operator, setOperator] =
    useState(() => OPERATORS.ADDITION);
  return (
    <main>
      <h1>Calculator</h1>
      <button
        onClick={() => setOperator(() => OPERATORS.ADDITION)}
      >
        Add
      </button>
      <button
        onClick={() => setOperator(() => OPERATORS.SUBTRACTION)}
      >
        Subtract
      </button>
      <button
        onClick={() => setOperator(() => OPERATORS.PRODUCT)}
      >
        Multiply
      </button>
      <p>
        Result of applying operator to {a} and {b}:
        <code> {operator(a, b)}</code> 
      </p>
    </main>
  )
}

function App() {
  return <Calculator a={7} b={4}  />;
}

export default App;
