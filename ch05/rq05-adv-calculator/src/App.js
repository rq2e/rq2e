import { useState } from 'react';
const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  PRODUCT: (a, b) => a * b,
};
function Calculator({a, b}) {
  const [operator, setOperator] =
    useState(() => OPERATORS.ADDITION);
  const [firstOperand, setFirstOperand] = useState(a);
  const [secondOperand, setSecondOperand] = useState(b);

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
      <br />
      <label>
        First operand:
        <input
          type="number"
          defaultValue={a}
          onChange={(evt) => setFirstOperand(evt.target.valueAsNumber)}
        />
      </label>
      <br />
      <label>
        Second operand:
        <input
          type="number"
          defaultValue={b}
          onChange={(evt) => setSecondOperand(evt.target.valueAsNumber)}
        />
      </label>
      <p>
        Result of applying operator to {firstOperand} and {secondOperand}:
        <code> {operator(firstOperand, secondOperand)}</code>
      </p>

    </main>
  )
}
function App() {
  return <Calculator a={7} b={4}  />;
}
export default App;
