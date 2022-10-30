import Button from "./Button";
import TimeDisplay from "./TimeDisplay";
import useTimer from "./useTimer";

function Timer({ startTime, id, onDelete }) {
  const {
    state: { remaining, isRunning, isCompleted },
    actions,
  } = useTimer(startTime);

  const timerClass = [
    "timer",
    isCompleted ? "timer-ringing" : "",
    isRunning ? "timer-ticking" : "",
  ].join(" ");

  return (
    <section className={timerClass}>
      <TimeDisplay time={remaining} />
      {isRunning ? (
        <Button icon="pause" label="Pause" onClick={actions.pause} />
      ) : (
        <Button
          icon="play"
          label="Play"
          onClick={actions.play}
          disabled={isCompleted}
        />
      )}
      <Button icon="restart" label="Restart" onClick={actions.restart} />
      <Button icon="trash" label="Delete" onClick={() => onDelete(id)} />
    </section>
  );
}

export default Timer;
