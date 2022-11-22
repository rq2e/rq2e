import { memo } from "react";

import StepControls from "./StepControls";
import StepCheckbox from "./StepCheckbox";

function Step({ taskId, index }) {
  return (
    <li className="step">
      <StepCheckbox taskId={taskId} index={index} />
      <StepControls taskId={taskId} index={index} />
    </li>
  );
}

export default memo(Step);
