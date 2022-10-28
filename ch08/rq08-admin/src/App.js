import { useState } from "react";

function Admin() {
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (password === "platypus") {
      setAdmin(true);
    }
  };
  return isAdmin ? (
    <h1>Bacon is delicious!</h1>
  ) : (
    <form onSubmit={onSubmit}>
      <input
        type="password"
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button>Login</button>
    </form>
  );
}

function App() {
  return <Admin />;
}

export default App;
