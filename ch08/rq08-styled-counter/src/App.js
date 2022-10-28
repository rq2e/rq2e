import { useState } from "react";

function Button({ handleClick, label }) {
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
}

function StyledCounter() {
  const [counter, setCounter] = useState(0);
  const update = (d) => setCounter((v) => v + d);
  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <Button handleClick={() => update(1)} label="Increment" />
        <Button handleClick={() => update(-1)} label="Decrement" />
      </div>
    </section>
  );
}

function App() {
  return <StyledCounter />;
}

export default App;
