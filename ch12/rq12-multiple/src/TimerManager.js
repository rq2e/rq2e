import { useState } from "react";

import Timer from "./Timer";
import AddTimer from "./AddTimer";

function TimerManager() {
  const [timers, setTimers] = useState([{ id: "first", startTime: 300 }]);
  const [isAdding, setAdding] = useState(false);

  const onAdd = (startTime) => {
    const id = `timer-${Math.random()}`;
    setTimers((oldTimers) => [...oldTimers, { id, startTime }]);
    setAdding(false);
  };

  const onDelete = (idToDelete) =>
    setTimers((oldTimers) => oldTimers.filter(({ id }) => id !== idToDelete));

  return (
    <div className="timers">
      {timers.map(({ id, startTime }) => (
        <Timer key={id} startTime={startTime} id={id} onDelete={onDelete} />
      ))}
      {isAdding ? (
        <AddTimer onAdd={onAdd} />
      ) : (
        <button className="timer timer-add" onClick={() => setAdding(true)}>
          +
        </button>
      )}
    </div>
  );
}

export default TimerManager;
