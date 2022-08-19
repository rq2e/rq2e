import { useContext } from "react";
import DataContext from "./DataContext";

function useData() {
  return useContext(DataContext);
}

export default useData;
