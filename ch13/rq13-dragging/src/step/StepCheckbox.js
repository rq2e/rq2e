import useStep from "./useStep";

function StepCheckbox({ index }) {
  const { step, completed, check } = useStep(
    ({ state: { steps }, actions: { check } }) => ({
      ...steps[index],
      check,
    }),
    true
  );

  return (
    <label className="step-label">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => check(index)}
      />
      {completed ? <s>{step}</s> : step}
    </label>
  );
}

export default StepCheckbox;
