import { useState } from "react";

function Address() {
  const [data, setData] = useState({
    address1: "",
    address2: "",
    zip: "",
    city: "",
    state: "",
    country: "",
  });
  const onChange = (key) => (evt) => {
    setData((oldData) => ({ ...oldData, [key]: evt.target.value }));
  };
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Address line 1:
        <input value={data.address1} onChange={onChange("address1")} />
      </label>
      <label>
        Address line 2:
        <input value={data.address2} onChange={onChange("address2")} />
      </label>
      <label>
        Zip:
        <input value={data.zip} onChange={onChange("zip")} />
      </label>
      <label>
        City:
        <input value={data.city} onChange={onChange("city")} />
      </label>
      <label>
        State:
        <input value={data.state} onChange={onChange("state")} />
      </label>
      <label>
        Country:
        <input value={data.country} onChange={onChange("country")} />
      </label>
    </form>
  );
}

function App() {
  return <Address />;
}

export default App;
