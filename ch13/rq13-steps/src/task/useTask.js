import { useContextSelector } from "use-context-selector";

import TaskContext from "./context";

function useTask(selector) {
  return useContextSelector(TaskContext, selector);
}

export default useTask;
