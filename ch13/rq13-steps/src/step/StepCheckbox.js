import useTask from "../task/useTask";

function StepCheckbox({ taskId, index }) {
  const {
    state: { tasks },
    actions: { editStep },
  } = useTask();
  const stepData = tasks.find((task) => task.id === taskId).steps[index];

  const handleCheck = () =>
    editStep(taskId, index, { completed: !stepData.completed });

  return (
    <label className="step-label">
      <input
        type="checkbox"
        checked={stepData.completed}
        onChange={handleCheck}
      />
      {stepData.completed ? <s>{stepData.step}</s> : stepData.step}
    </label>
  );
}

export default StepCheckbox;
