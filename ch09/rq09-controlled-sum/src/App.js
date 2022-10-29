import { useState } from "react";

function Sum() {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const onChangeFirst = (evt) => setFirst(evt.target.valueAsNumber);
  const onChangeSecond = (evt) => setSecond(evt.target.valueAsNumber);
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        A:
        <input type="number" value={first} onChange={onChangeFirst} />
      </label>
      <label>
        B:
        <input type="number" value={second} onChange={onChangeSecond} />
      </label>
      <div>A+B: {first + second}</div>
    </form>
  );
}

function App() {
  return <Sum />;
}

export default App;
