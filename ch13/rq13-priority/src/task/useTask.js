import useContextSelector from "../useContextSelector";
import TaskContext from "./context";

function useTask(selector, selectMultiple) {
  return useContextSelector(TaskContext, selector, selectMultiple);
}

export default useTask;
