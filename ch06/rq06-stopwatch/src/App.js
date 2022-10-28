import { useState, useEffect } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds((seconds) => seconds + 1),
      1000
    );
    return () => clearInterval(interval);
  }, []);
  return <h1>Seconds: {seconds}</h1>;
}

function App() {
  const [showWatch, setShowWatch] = useState(false);
  return (
    <>
      <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
      {showWatch && <Stopwatch />}
    </>
  );
}

export default App;
