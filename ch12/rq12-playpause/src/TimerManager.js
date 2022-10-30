import Timer from "./Timer";

function TimerManager() {
  return (
    <div className="timers">
      <Timer startTime={300} />
    </div>
  );
}

export default TimerManager;
