import { useState, useRef, useEffect } from "react";

function Transition() {
  const [isRunning, setRunning] = useState(false);
  const div = useRef();
  useEffect(() => {
    const onStart = () => setRunning(true);
    const onEnd = () => setRunning(false);
    const node = div.current;
    node.addEventListener("transitionstart", onStart);
    node.addEventListener("transitionend", onEnd);
    return () => {
      node.removeEventListener("transitionstart", onStart);
      node.removeEventListener("transitionend", onEnd);
    };
  }, [setRunning]);
  return (
    <section>
      <h1>Transition is {!isRunning && "not"} running</h1>
      <div style={{ color: "red", transition: "color 1s linear" }} ref={div}>
        COLORFUL TEXT
      </div>
      <button onClick={() => (div.current.style.color = "blue")}>
        Go blue
      </button>
      <button onClick={() => (div.current.style.color = "red")}>Go red</button>
    </section>
  );
}

function App() {
  return <Transition />;
}

export default App;
