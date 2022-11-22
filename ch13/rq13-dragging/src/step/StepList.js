import { Fragment } from "react";

import useStep from "./useStep";
import Step from "./Step";
import StepAdd from "./StepAdd";
import StepDroppable from "./StepDroppable";

function StepList() {
  const { isDragging, steps } = useStep(
    ({ state: { dragging, steps } }) => ({
      isDragging: dragging !== null,
      steps: steps.map(({ step }) => step),
    }),
    true
  );

  return (
    <section className="progress">
      <ol className="progress-steps">
        {isDragging && <StepDroppable position={0} />}
        {steps.map((step, index) => (
          <Fragment key={step}>
            <Step index={index} />
            {isDragging && <StepDroppable position={index + 1} />}
          </Fragment>
        ))}
        <StepAdd />
      </ol>
    </section>
  );
}

export default StepList;
