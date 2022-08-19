import { useEffect } from "react";
import { store, STORAGE_KEY } from "./store";
import { Provider } from "react-redux";

function DataProvider({ children }) {
  useEffect(
    () =>
      store.subscribe(() =>
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().data))
      ),
    []
  );
  return <Provider store={store}>{children}</Provider>;
}

export default DataProvider;
