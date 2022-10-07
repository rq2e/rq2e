import { createContext } from "use-context-selector";

const DataContext = createContext({ state: {}, actions: {} });
export default DataContext;
