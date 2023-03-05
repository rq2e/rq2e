import { memo, Fragment } from "react";

import useStep from "./useStep";
import StepControls from "./StepControls";
import StepCheckbox from "./StepCheckbox";
import StepEdit from "./StepEdit";

import Button from "../Button";

function Step({ index }) {
  const {
    state: { editingStep, dragging },
    actions: { startDrag },
  } = useStep();
  const isEditing = editingStep === index;
  const isDragging = dragging === index;

  const handleDragStart = (evt) => {
    evt.dataTransfer.dropEffect = "move";
    startDrag(index);
  };

  if (isDragging) {
    return <li className="step step-dragged" />;
  }

  return (
    <li draggable={!isEditing} className="step" onDragStart={handleDragStart}>
      {isEditing ? (
        <StepEdit index={index} />
      ) : (
        <>
          <Button
            as="span"
            className="step-button step-handle"
            icon="drag"
            label="Move"
          />
          <StepCheckbox index={index} />
          <StepControls index={index} />
        </>
      )}
    </li>
  );
}

export default memo(Step);
