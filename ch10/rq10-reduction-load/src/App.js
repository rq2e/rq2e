import { useEffect } from "react";
import useReduction from "use-reduction";

const URL = "https://swapi.dev/api/films";

const reducer = {
  loading: (state, { payload }) => ({
    ...state,
    status: "LOADING",
  }),
  failure: (state, { payload }) => ({
    ...state,
    status: "ERROR",
    error: payload,
  }),
  success: (state, { payload }) => ({
    ...state,
    status: "SUCCESS",
    result: payload,
  }),
};

const INITIAL_STATE = { status: "INITIALIZE", result: null, error: null };
function Loader() {
  const [state, actions] = useReduction(INITIAL_STATE, reducer);
  useEffect(() => {
    actions.loading();
    fetch(URL)
      .then((res) => res.json())
      .then(({ results }) => actions.success(results))
      .catch(({ message }) => actions.failure(message));
  }, [actions]);
  const { status, error, result } = state;
  if (status === "INITIALIZE") {
    return <h1>Initializing...</h1>;
  }
  if (status === "LOADING") {
    return <h1>Loading...</h1>;
  }
  if (status === "ERROR") {
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
