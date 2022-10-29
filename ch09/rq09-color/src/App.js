import { useState } from "react";

const PLACEHOLDER = `conic-gradient(
  gray 0.25turn, white 0 0.5turn, gray 0 0.75turn, white 0 1turn,
)`;

function HexColor() {
  const [color, setColor] = useState("BADA55");
  const onChange = (evt) =>
    setColor(evt.target.value.replace(/[^0-9a-f]/gi, "").toUpperCase());
  const outputStyle = {
    width: "20px",
    border: "1px solid",
    background: color.length === 6 ? `#${color}` : PLACEHOLDER,
  };
  return (
    <form style={{ display: "flex" }}>
      <label>
        Hex color:
        <input value={color} onChange={onChange} />
      </label>
      <span style={outputStyle} />
    </form>
  );
}

function App() {
  return <HexColor />;
}

export default App;
