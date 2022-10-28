import { useState, useEffect } from "react";

function RemoteDropdown() {
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch("//www.swapi.tech/api/people")
      .then((res) => res.json())
      .then((data) => setOptions(data.results.map(({ name }) => name)));
  }, []);
  return (
    <select>
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

function App() {
  return <RemoteDropdown />;
}

export default App;
