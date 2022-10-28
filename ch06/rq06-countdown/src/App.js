import { useEffect, useState } from "react";

function Countdown({ from }) {
  const [seconds, setSeconds] = useState(from);
  const [isRunning, setRunning] = useState(false);
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(
      () =>
        setSeconds((value) => {
          if (value <= 1) {
            setRunning(false);
          }
          return value - 1;
        }),
      1000
    );
    return () => clearInterval(interval);
  }, [isRunning]);
  return (
    <section>
      <h2>Time left: {seconds} seconds</h2>
      <button onClick={() => setSeconds(from)}>Reset</button>
      <button onClick={() => setRunning((v) => !v)} disabled={seconds === 0}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </section>
  );
}

function App() {
  return <Countdown from={10} />;
}

export default App;
