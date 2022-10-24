import { useContext } from "react";
import OverlayContext from "./context";

function useAlert() {
  return useContext(OverlayContext).alert || (() => {});
}

export default useAlert;
