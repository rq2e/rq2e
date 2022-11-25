import { useContextSelector } from "use-context-selector";
import DataContext from "./DataContext";

function useData(selector) {
  return useContextSelector(DataContext, selector);
}

export default useData;
