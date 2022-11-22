import useTask from "./useTask";

function TaskProgress({ id }) {
  const steps = useTask(
    ({ state: { tasks } }) => tasks.find((task) => task.id === id).steps
  );

  const stepsTotal = steps.length;
  const stepsCompleted = steps.filter(({ completed }) => completed).length;

  return (
    <progress
      className="progress-bar"
      max={stepsTotal}
      value={stepsCompleted}
    />
  );
}

export default TaskProgress;
