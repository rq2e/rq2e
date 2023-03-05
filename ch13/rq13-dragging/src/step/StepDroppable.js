import useStep from "./useStep";

function StepDroppable({ id, position }) {
  const {
    actions: { moveTo },
  } = useStep();

  const handleDragLeave = (evt) => {
    evt.preventDefault();
    evt.target.classList.remove("step-droppable-hover");
  };

  const handleDragEnter = (evt) => {
    evt.preventDefault();
    evt.target.classList.add("step-droppable-hover");
  };

  const handleDragOver = (evt) => evt.preventDefault();

  const handleDrop = (evt) => {
    evt.preventDefault();
    moveTo(position);
  };

  return (
    <li
      className="step step-droppable"
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    />
  );
}

export default StepDroppable;
