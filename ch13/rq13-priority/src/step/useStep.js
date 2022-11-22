import useContextSelector from "../useContextSelector";
import StepContext from "./context";

function useStep(selector, selectMultiple) {
  return useContextSelector(StepContext, selector, selectMultiple);
}

export default useStep;
