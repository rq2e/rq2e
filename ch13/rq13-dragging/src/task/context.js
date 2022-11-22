import { createContext } from "use-context-selector";

const TaskContext = createContext({ state: {}, actions: {} });

export default TaskContext;
