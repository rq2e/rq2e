import { useState } from 'react';
const OPERATORS = {
  ADDITION: (a, b) => a + b,
  SUBTRACTION: (a, b) => a - b,
  PRODUCT: (a, b) => a * b,
};
function Operator({ current, operator, setter, label }) {
  const borderColor = operator === current ? 'hotpink' : 'black';
  const style = { border: `2px solid ${borderColor}` };
  const onClick = () => setter(() => operator);
  return <button style={style} onClick={onClick}>{label}</button>;
}
function Operand({ initial, setter, label }) {
  const onChange = (evt) => setter(evt.target.valueAsNumber);
  return (
    <label>
      <br />
      {label}
      <input defaultValue={initial} type="number" onChange={onChange} />
    </label>     
  );
} 
function Calculator({a, b}) {
  const [operator, setOperator] =
    useState(() => OPERATORS.ADDITION);
  const [firstOperand, setFirstOperand] = useState(a);
  const [secondOperand, setSecondOperand] = useState(b);
  return (
    <main>
      <h1>Calculator</h1>
      <Operator
        current={operator}
        operator={OPERATORS.ADDITION}
        setter={setOperator}
        label="Add"
      />
      <Operator
        current={operator}
        operator={OPERATORS.SUBTRACTION}
        setter={setOperator}
        label="Subtract"
      />
      <Operator
        current={operator}
        operator={OPERATORS.PRODUCT}
        setter={setOperator}
        label="Multiply"
      />
      <Operand initial={a} setter={setFirstOperand} label="First operand" />
      <Operand initial={b} setter={setSecondOperand} label="Second operand" />
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
