import { useReducer } from "react";
function reducer(state, { type }) {
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}
function Counter() {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <section>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
    </section>
  );
}

function App() {
  return <Counter />;
}

export default App;
