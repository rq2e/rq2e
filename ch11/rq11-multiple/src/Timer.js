import { memo, useCallback } from 'react';

import Button from './Button';
import Number from './Number';
import useTimer from './useTimer';

function Timer({ startTime, id, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    actions,
  } = useTimer(startTime);

  const handleDelete = useCallback(() => onDelete(id), [id, onDelete]);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;

  return (
    <section className={`timer ${isCompleted ? 'timer-ringing' : ''}`}>
      <ul className="parts">
        <Number value={minutes} label="minutes" />
        <li className={`colon ${isRunning ? 'colon-blinking' : ''}`}>:</li>
        <Number value={seconds} label="seconds" />
      </ul>
      {isRunning
        ? <Button icon="pause" label="Pause" onClick={actions.pause} />
        : <Button icon="play" label="Play" onClick={actions.play} disabled={isCompleted} />
      }
      <Button icon="restart" label="Restart" onClick={actions.restart} />
      <Button icon="trash" label="Delete" onClick={handleDelete} />
    </section>
  );
};

export default memo(Timer);