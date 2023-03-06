import { useEffect, useState } from "react";

function EmailInput({ value }) {
  const [email, setEmail] = useState("");
  useEffect(() => setEmail(value), [value]);
  return (
    <label>
      Email address:
      <input
        type="email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
    </label>
  );
}

const EMAIL1 = "daffyduck@looneytunes.invalid";
const EMAIL2 = "bugsbunny@looneytunes.invalid";
const EMAIL3 = "elmerfudd@looneytunes.invalid";
function App() {
  const [defaultEmail, setDefaultEmail] = useState(EMAIL1);
  return (
    <main>
      <button onClick={() => setDefaultEmail(EMAIL1)}>Use {EMAIL1}</button>
      <br />
      <button onClick={() => setDefaultEmail(EMAIL2)}>Use {EMAIL2}</button>
      <br />
      <button onClick={() => setDefaultEmail(EMAIL3)}>Use {EMAIL3}</button>
      <br />
      <EmailInput value={defaultEmail} />
    </main>
  );
}

export default App;
