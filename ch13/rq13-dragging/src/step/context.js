import { createContext } from "use-context-selector";

const StepContext = createContext({ state: {}, actions: {} });

export default StepContext;
