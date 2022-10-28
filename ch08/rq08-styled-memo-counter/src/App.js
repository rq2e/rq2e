import { memo, useState, useCallback } from "react";

const Button = memo(function Button({ handleClick, label }) {
  const buttonStyle = {
    color: "blue",
    border: "1px solid",
    background: "transparent",
    borderRadius: ".25em",
    padding: ".5em 1em",
    margin: ".5em",
  };
  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
});

function StyledCounter() {
  const [counter, setCounter] = useState(0);
  const update = useCallback((d) => setCounter((v) => v + d), [setCounter]);
  const handleIncrement = useCallback(() => update(1), [update]);
  const handleDecrement = useCallback(() => update(-1), [update]);
  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <Button handleClick={handleIncrement} label="Increment" />
        <Button handleClick={handleDecrement} label="Decrement" />
      </div>
    </section>
  );
}

function App() {
  return <StyledCounter />;
}

export default App;
