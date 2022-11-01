import { useState } from "react";

function Icon({ type }) {
  return <img src={`images/${type}.png`} width="16" alt="" />;
}
function Button({ label, getIcon }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button onClick={() => setPressed((p) => !p)}>
      {getIcon(pressed)}
      {label}
    </button>
  );
}

function LockButton() {
  const getIcon = (pressed) =>
    pressed ? <Icon type="lock" /> : <Icon type="unlock" />;
  return <Button label="Lock" getIcon={getIcon} />;
}

function App() {
  return <LockButton />;
}

export default App;
