import { useEffect } from "react";
import { useInterpret } from "@xstate/react";

import machine from "./machine";
import DataContext from "./DataContext";

const STORAGE_KEY = "100-things-xstate";

function DataProvider({ children }) {
  const state =
    JSON.parse(localStorage.getItem(STORAGE_KEY)) || machine.initialState;
  const service = useInterpret(machine, { state });
  useEffect(() => {
    const subscription = service.subscribe((state) =>
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    );
    return subscription.unsubscribe;
  }, [service]);
  return (
    <DataContext.Provider value={service}>{children}</DataContext.Provider>
  );
}

export default DataProvider;
