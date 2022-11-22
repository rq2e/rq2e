import useStep from "./useStep";
import Button from "../Button";

function StepButton(props) {
  return <Button className="step-button" {...props} />;
}

function StepControls({ index }) {
  const { moveUp, moveDown, remove, setEditingStep } = useStep(
    ({ actions: { moveUp, moveDown, remove, setEditingStep } }) => ({
      moveUp,
      moveDown,
      remove,
      setEditingStep,
    }),
    true
  );

  return (
    <>
      <StepButton
        icon="pencil"
        label="Edit"
        onClick={() => setEditingStep(index)}
      />
      <StepButton icon="trash" label="Delete" onClick={() => remove(index)} />
      <StepButton icon="up" label="Move up" onClick={() => moveUp(index)} />
      <StepButton
        icon="down"
        label="Move down"
        onClick={() => moveDown(index)}
      />
    </>
  );
}

export default StepControls;
