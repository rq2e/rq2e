import Button from "../Button";
import useStep from "./useStep";

function StepAdd() {
  const {
    actions: { add },
  } = useStep();

  const handleAddStep = (evt) => {
    evt.preventDefault();
    add(evt.target.step.value);
    evt.target.reset();
  };

  return (
    <li className="step add-step">
      <form className="step-form" onSubmit={handleAddStep}>
        <input className="step-input" placeholder="Add new step" name="step" />
        <Button className="step-button" icon="plus" label="Add new step" />
      </form>
    </li>
  );
}

export default StepAdd;
