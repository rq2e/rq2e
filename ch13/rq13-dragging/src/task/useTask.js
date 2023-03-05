import { useContext } from "react";
import TaskContext from "./context";

function useTask() {
  return useContext(TaskContext);
}

export default useTask;
