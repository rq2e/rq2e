import { useState, useEffect } from "react";

function getWindowSize() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function WindowSize() {
  const [size, setSize] = useState(getWindowSize());
  useEffect(() => {
    const onResize = () => setSize(getWindowSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [setSize]);
  return <h1>Window size: {size}</h1>;
}

function App() {
  return <WindowSize />;
}

export default App;
