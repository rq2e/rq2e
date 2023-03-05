import { useContext } from "react";
import StepContext from "./context";

function useStep() {
  return useContext(StepContext);
}

export default useStep;
