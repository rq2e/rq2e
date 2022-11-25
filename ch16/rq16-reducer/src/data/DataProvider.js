import { useEffect } from "react";
import { v4 as uuid } from "uuid";
import produce from "immer";
import useReduction from "use-reduction";

import DataContext from "./DataContext";

const STORAGE_KEY = "100-things-reducer";

const INITIAL_STATE = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  things: [],
  currentThing: null,
};

const reducers = {
  seeThing: produce((draft, { payload: newThing }) => {
    draft.currentThing = newThing;
  }),
  seeAllThings: produce((draft) => {
    draft.currentThing = null;
  }),
  addThing: produce((draft, { payload: name }) => {
    draft.things.push({ id: uuid(), name, done: [] });
  }),
  removeThing: produce((draft, { payload: id }) => {
    const index = draft.things.findIndex((thing) => thing.id === id);
    if (index !== -1) {
      draft.things.splice(index, 1);
      if (id === draft.currentThing) {
        draft.currentThing = null;
      }
    }
  }),
  doThing: produce((draft, { payload: id }) => {
    const thing = draft.things.find((thing) => thing.id === id);
    thing.done.push(Date.now());
  }),
  undoThing: produce((draft, { payload: { id, index } }) => {
    const thing = draft.things.find((thing) => thing.id === id);
    thing.done.splice(index, 1);
  }),
};

function DataProvider({ children }) {
  const [state, actions] = useReduction(INITIAL_STATE, reducers);
  useEffect(
    () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state)),
    [state]
  );
  const value = { state, actions };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
