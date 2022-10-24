import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Paragraph = styled.p`
  font-size: 200%;
  margin: 0;
`;

function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const format = (n: number) => String(n).padStart(2, "0");
  return `${format(hours)}:${format(minutes % 60)}:${format(seconds % 60)}`;
}

function Countdown({ target }: { target: number }) {
  const [seconds, setSeconds] = useState(() =>
    Math.floor((target - new Date().getTime()) / 1000)
  );
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <Paragraph>{formatSeconds(Math.max(0, seconds))}</Paragraph>;
}

export default Countdown;
