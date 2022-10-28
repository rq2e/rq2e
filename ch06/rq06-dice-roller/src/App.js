import { useState } from "react";

function Die() {
  const style = {
    border: "2px solid black",
    display: "inline-block",
    width: "2em",
    height: "2em",
    textAlign: "center",
    lineHeight: 2,
  };
  const value = Math.floor(6 * Math.random());
  return <span style={style}>{value}</span>;
}

function DiceRoller() {
  const [rolls, setRolls] = useState(1);
  return (
    <main>
      <h1>Rolls: {rolls}</h1>
      <button onClick={() => setRolls((r) => r + 1)}>Re-roll</button>
      <div>
        <Die />
        <Die />
        <Die />
      </div>
    </main>
  );
}

function App() {
  return <DiceRoller />;
}

export default App;
