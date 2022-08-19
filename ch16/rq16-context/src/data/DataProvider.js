import { useState, useCallback, useEffect } from "react";
import { v4 as uuid } from "uuid";

import DataContext from "./DataContext";

const STORAGE_KEY = "100-things-context";

const INITIAL_STATE = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
  things: [],
  currentThing: null,
};

function DataProvider({ children }) {
  const [things, setThings] = useState(INITIAL_STATE.things);
  const [currentThing, setCurrentThing] = useState(INITIAL_STATE.currentThing);
  useEffect(
    () =>
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ things, currentThing })
      ),
    [things, currentThing]
  );
  const addThing = useCallback(
    (name) => setThings((ts) => ts.concat([{ id: uuid(), name, done: [] }])),
    []
  );
  const seeThing = setCurrentThing;
  const seeAllThings = useCallback(() => setCurrentThing(null), []);
  const editThing = useCallback(
    (id, cb) =>
      setThings((ts) =>
        ts.map((t) => (t.id === id ? { ...t, done: cb(t.done) } : t))
      ),
    []
  );
  const removeThing = useCallback((id) => {
    setThings((ts) => ts.filter((t) => t.id !== id));
    setCurrentThing((cur) => (cur === id ? null : cur));
  }, []);
  const doThing = useCallback(
    (id) => editThing(id, (done) => done.concat(Date.now())),
    [editThing]
  );
  const undoThing = useCallback(
    (id, index) =>
      editThing(id, (done) =>
        done.slice(0, index).concat(done.slice(index + 1))
      ),
    [editThing]
  );
  const value = {
    state: {
      things,
      currentThing,
    },
    actions: {
      addThing,
      seeThing,
      seeAllThings,
      doThing,
      undoThing,
      removeThing,
    },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
