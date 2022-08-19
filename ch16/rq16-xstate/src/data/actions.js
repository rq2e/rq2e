import { assign } from "xstate";
import { v4 as uuid } from "uuid";

export const addThing = assign({
  things: (context, { name }) =>
    context.things.concat([{ id: uuid(), name, done: [] }]),
});

export const seeThing = assign({
  currentThing: (context, { id }) => id,
});

export const seeAllThings = assign({
  currentThing: null,
});

export const removeThing = assign({
  things: (context) =>
    context.things.filter((t) => t.id !== context.currentThing),
  currentThing: null,
});

function editThing(things, id, cb) {
  return things.map((t) => (t.id === id ? { ...t, done: cb(t.done) } : t));
}

function doSomeThing(things, id) {
  return editThing(things, id, (done) => done.concat(Date.now()));
}

export const doThatThing = assign({
  things: (context, { id }) => doSomeThing(context.things, id),
});
export const doThisThing = assign({
  things: (context) => doSomeThing(context.things, context.currentThing),
});

function undoSomeThing(things, id, index) {
  return editThing(things, id, (done) =>
    done.slice(0, index).concat(done.slice(index + 1))
  );
}

export const undoThatThing = assign({
  things: (context, { id, index }) => undoSomeThing(context.things, id, index),
});

export const undoThisThing = assign({
  things: (context, { index }) =>
    undoSomeThing(context.things, context.currentThing, index),
});
