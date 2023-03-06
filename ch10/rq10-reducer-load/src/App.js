import { useReducer, useEffect } from "react";

const URL = "//swapi.dev/api/films";
const INITIAL_STATE = { status: "INITIALIZE", result: null, error: null };

function reducer(state, { type, payload }) {
  switch (type) {
    case "LOADING":
      return { ...state, status: "LOADING" };
    case "FAILURE":
      return { ...state, status: "FAILURE", error: payload };
    case "SUCCESS":
      return { ...state, status: "SUCCESS", result: payload };
    default:
      return state;
  }
}

function Loader() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch(URL)
      .then((res) => res.json())
      .then(({ results }) => dispatch({ type: "SUCCESS", payload: results }))
      .catch(({ message }) => dispatch({ type: "FAILURE", payload: message }));
  }, []);
  const { status, error, result } = state;
  if (status === "INITIALIZE") {
    return <h1>Initializing...</h1>;
  }
  if (status === "LOADING") {
    return <h1>Loading...</h1>;
  }
  if (status === "FAILURE") {
    return <h1>Error occurred: {error}</h1>;
  }
  return (
    <>
      <h1>Results are in</h1>
      <ul>
        {result.map(({ title }) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return <Loader />;
}

export default App;
