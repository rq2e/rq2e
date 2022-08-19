import { createMachine } from "xstate";
import {
  doThatThing,
  undoThatThing,
  doThisThing,
  undoThisThing,
  removeThing,
  seeThing,
  seeAllThings,
  addThing,
} from "./actions";

const machine = createMachine(
  {
    id: "100-things",
    context: {
      things: [],
      currentThing: null,
    },
    initial: "list",
    states: {
      list: {
        on: {
          DO_THAT: {
            target: "list",
            actions: "doThatThing",
          },
          UNDO_THAT: {
            target: "list",
            actions: "undoThatThing",
          },
          ADD: {
            target: "list",
            actions: "addThing",
          },
          SEE: {
            target: "single",
            actions: "seeThing",
          },
        },
      },
      single: {
        on: {
          DO_THIS: {
            target: "single",
            actions: "doThisThing",
          },
          UNDO_THIS: {
            target: "single",
            actions: "undoThisThing",
          },
          REMOVE: {
            target: "list",
            actions: "removeThing",
          },
          SEE_ALL: {
            target: "list",
            actions: "seeAllThings",
          },
        },
      },
    },
  },
  {
    actions: {
      addThing,
      doThatThing,
      undoThatThing,
      doThisThing,
      undoThisThing,
      seeThing,
      seeAllThings,
      removeThing,
    },
  }
);

export default machine;
