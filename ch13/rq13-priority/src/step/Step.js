import useStep from "./useStep";
import StepControls from "./StepControls";
import StepCheckbox from "./StepCheckbox";
import StepEdit from "./StepEdit";

function Step({ index }) {
  const {
    state: { editingStep },
  } = useStep();
  const isEditing = editingStep === index;

  return (
    <li className="step">
      {isEditing ? (
        <StepEdit index={index} />
      ) : (
        <>
          <StepCheckbox index={index} />
          <StepControls index={index} />
        </>
      )}
    </li>
  );
}

export default Step;
