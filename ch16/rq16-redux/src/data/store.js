import { v4 as uuid } from "uuid";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import produce from "immer";

export const STORAGE_KEY = "100-things-redux";

const getInitialThings = () =>
  JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
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

const dataSlice = createSlice({
  name: "data",
  initialState: getInitialThings(),
  reducers,
});

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export const actions = dataSlice.actions;
