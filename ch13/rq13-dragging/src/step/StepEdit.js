import useStep from "./useStep";
import Button from "../Button";

function StepEdit({ index }) {
  const { oldText, edit } = useStep(
    ({ state: { steps }, actions: { edit } }) => ({
      oldText: steps[index].step,
      edit,
    }),
    true
  );

  const handleEditStep = (evt) => {
    evt.preventDefault();
    edit(index, evt.target.step.value);
  };

  return (
    <form className="step-form" onSubmit={handleEditStep}>
      <input
        className="step-input"
        placeholder="Edit step"
        defaultValue={oldText}
        name="step"
      />
      <Button className="step-button" icon="check" label="Edit step" />
    </form>
  );
}

export default StepEdit;
