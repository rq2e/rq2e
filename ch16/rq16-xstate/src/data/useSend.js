import { useContext } from "react";
import DataContext from "./DataContext";

function useSend() {
  return useContext(DataContext).send;
}

export default useSend;
