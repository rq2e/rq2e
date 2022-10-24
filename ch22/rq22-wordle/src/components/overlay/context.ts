import { createContext, ReactNode } from "react";
import { Callback } from "types";

type OverlayType = {
  alert: Callback<string>;
  showDialog: Callback<ReactNode>;
  closeDialog: Callback;
};

const OverlayContext = createContext<Partial<OverlayType>>({});

export default OverlayContext;
