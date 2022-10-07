import { setupWorker, rest, createResponseComposition, context } from "msw";
import { v4 as uuid } from "uuid";

const delayedResponse = createResponseComposition(null, [
  context.delay("real"),
]);

const CACHE_KEY = "100-things-msw-reactive";
const store = JSON.parse(localStorage.getItem(CACHE_KEY)) || {
  things: [],
  isAuthorized: false,
};
function updateStore(newStore) {
  Object.assign(store, newStore);
  localStorage.setItem(CACHE_KEY, JSON.stringify(store));
}

function missingAuth(res, ctx) {
  if (!store.isAuthorized) {
    return delayedResponse(() =>
      res(ctx.status(403), ctx.json({ error: "Unauthorized" }))
    );
  }
}

const worker = setupWorker(
  // - AUTHORIZATION NOT REQUIRED -

  // LOGIN
  rest.post("/api/session", (req, res, ctx) => {
    updateStore({ isAuthorized: true });
    return delayedResponse(() => res(ctx.json({ status: "SESSION_CREATED" })));
  }),
  // LOGOUT
  rest.delete("/api/session", (req, res, ctx) => {
    updateStore({ isAuthorized: false });
    return delayedResponse(() => res(ctx.json({ status: "SESSION_DELETED" })));
  }),
  // SIGNUP
  rest.post("/api/user", (req, res, ctx) => {
    updateStore({ isAuthorized: true });
    return delayedResponse(() => res(ctx.json({ status: "USER_CREATED" })));
  }),

  // - AUTHORIZATION REQUIRED -

  // GET USER
  rest.get("/api/user", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const user = { id: 1 };
    return delayedResponse(() => res(ctx.json(user)));
  }),
  // GET ALL THINGS
  rest.get("/api/things", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const minimalThings = store.things.map(({ id, name, done }) => ({
      id,
      name,
      count: done.length,
    }));
    return delayedResponse(() => res(ctx.json(minimalThings)));
  }),
  // GET SINGLE THING
  rest.get("/api/things/:tid", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { tid } = req.params;
    const thing = store.things.find(({ id }) => id === tid);
    return delayedResponse(() => res(ctx.json(thing)));
  }),
  // DELETE THING
  rest.delete("/api/things/:tid", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { tid } = req.params;
    const things = store.things.filter(({ id }) => id !== tid);
    updateStore({ things });
    return delayedResponse(() => res(ctx.json({ status: "THING_DELETED" })));
  }),
  // ADD A THING
  rest.post("/api/things", async (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { name, description } = await req.json();
    const things = store.things.concat([
      { id: uuid(), done: [], name, description },
    ]);
    updateStore({ things });
    return delayedResponse(() => res(ctx.json({ status: "THING_CRAETED" })));
  }),
  // DELETE LAST DONE FOR THING
  rest.delete("/api/things/:tid/done/last", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { tid } = req.params;
    const things = store.things.map((thing) =>
      thing.id === tid ? { ...thing, done: thing.done.slice(0, -1) } : thing
    );
    updateStore({ things });
    return delayedResponse(() => res(ctx.json({ status: "DONE_DELETED" })));
  }),
  // DELETE DONE FOR THING
  rest.delete("/api/things/:tid/done/:did", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { tid, did } = req.params;
    const things = store.things.map((thing) =>
      thing.id === tid
        ? { ...thing, done: thing.done.filter(({ id }) => id !== did) }
        : thing
    );
    updateStore({ things });
    return delayedResponse(() => res(ctx.json({ status: "DONE_DELETED" })));
  }),
  // DO A THING (ADD A DONE)
  rest.post("/api/things/:tid/done", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { tid } = req.params;
    const things = store.things.map((thing) =>
      thing.id === tid
        ? {
            ...thing,
            done: thing.done.concat({ id: uuid(), time: new Date().getTime() }),
          }
        : thing
    );
    updateStore({ things });
    return delayedResponse(() => res(ctx.json({ status: "DONE_CREATED" })));
  })
);

// Register the Service Worker and enable the mocking
export default worker;
