import { useState, useEffect } from 'react';

import Button from './Button';
import Number from './Number';

function Timer({ startTime, id, onDelete }) {
  const [remaining, setRemaining] = useState(startTime);
  const [isRunning, setRunning] = useState(false);
  const [isCompleted, setCompleted] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    function tick() {
      setRemaining(oldValue => {
        const value = oldValue - 1;
        if (value <= 0) {
          setRunning(false);
          setCompleted(true);
          return startTime;
        }
        return value;
      });
    }

    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  const handleRestart = () => {
    setRemaining(startTime);
    setCompleted(false);
  }

  return (
    <section className={`timer ${isCompleted ? 'timer-ringing' : ''}`}>
      <ul className="parts">
        <Number value={minutes} label="minutes" />
        <li className={`colon ${isRunning ? 'colon-blinking' : ''}`}>:</li>
        <Number value={seconds} label="seconds" />
      </ul>
      {isRunning
        ? <Button icon="pause" label="Pause" onClick={() => setRunning(false)} />
        : <Button icon="play" label="Play" onClick={() => setRunning(true)} disabled={isCompleted} />
      }
      <Button icon="restart" label="Restart" onClick={handleRestart} />
      <Button icon="trash" label="Delete" onClick={() => onDelete(id)} />
    </section>
  );
};

export default Timer;