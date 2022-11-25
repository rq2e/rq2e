import { useContext } from "react";
import DataContext from "./DataContext";
import { useSelector } from "@xstate/react";

function useData(selector) {
  const service = useContext(DataContext);
  return useSelector(service, selector);
}

export default useData;
