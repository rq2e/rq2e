import { useState } from "react";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const onClick = () => {
    if (password === "platypus") {
      setAdmin(true);
    }
  };
  return (
    <>
      {isAdmin && <h1>Bacon is delicious!</h1>}
      <form>
        <input
          type="password"
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button onClick={onClick}>
          Login
        </button>
      </form>
    </>
  );
}

function App() {
  return <Admin />;
}

export default App;
