import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://swapi.dev/api/starships/";
function StarshipList() {
  const [state, setState] = useState({ status: "initial" });
  useEffect(() => {
    setState({ status: "loading" });
    axios
      .get(URL)
      .then(({ data }) => setState({ status: "success", list: data.results }))
      .catch(({ message }) => setState({ status: "error", error: message }));
  }, []);
  if (["loading", "initial"].includes(state.status)) {
    return <h1>Loading...</h1>;
  }
  if (state.status === "error") {
    return <h1>Error: {state.error}</h1>;
  }

  return (
    <>
      <h1>List of Starships:</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {state.list.map(({ url, name, model, starship_class }) => (
            <tr key={url}>
              <td>{name}</td>
              <td>{model}</td>
              <td>{starship_class}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default StarshipList;
