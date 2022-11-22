import useTask from "../task/useTask";

function StepCheckbox({ taskId, index }) {
  const stepData = useTask(
    ({ state: { tasks } }) =>
      tasks.find((task) => task.id === taskId).steps[index]
  );
  const editStep = useTask(({ actions: { editStep } }) => editStep);

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
