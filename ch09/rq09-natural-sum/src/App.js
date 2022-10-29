import { useState } from "react";

function NaturalSum() {
  const [sum, setSum] = useState(0);
  const onSubmit = (evt) => {
    const value = evt.target.elements.operand.valueAsNumber;
    const naturalSum = (value * (value + 1)) / 2;
    setSum(naturalSum);
    evt.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>
        Number:
        <input type="number" defaultValue="1" min="1" name="operand" />
      </label>
      <div>
        <button>Submit</button>
      </div>
      <div>Sum: {sum}</div>
    </form>
  );
}

function App() {
  return <NaturalSum />;
}

export default App;
