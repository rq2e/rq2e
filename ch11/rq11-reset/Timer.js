import Button, { PAUSE, PLAY, RESTART, DELETE } from './Button';
import Number from './Number';
import useTimer from './useTimer';

function Timer({ startTime, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    actions,
  } = useTimer(startTime);

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
        ? <Button type={PAUSE} onClick={actions.pause} />
        : <Button type={PLAY} onClick={actions.play} disabled={isCompleted} />
      }
      <Button type={RESTART} onClick={actions.restart} />
      <Button type={DELETE} onClick={onDelete} />
    </section>
  );
};

export default Timer;