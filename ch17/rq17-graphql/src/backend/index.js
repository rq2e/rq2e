import { graphql, setupWorker, createResponseComposition, context } from "msw";
import { v4 as uuid } from "uuid";

const delayedResponse = createResponseComposition(null, [
  context.delay("real"),
]);

const CACHE_KEY = "100-things-msw-graphql";
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
      res(
        ctx.errors([
          {
            message: "Not authenticated",
            errorType: "AuthenticationError",
          },
        ])
      )
    );
  }
}

const user = { id: 1, __typename: "User" };

const smallThing = ({ id, name, done }) => ({
  id,
  name,
  count: done.length,
  __typename: "Thing",
});
const extraThing = ({ id, name, description, done }) => ({
  id,
  name,
  description,
  done: done.map((d) => Object.assign({ __typename: "Done" }, d)),
  __typename: "Thing",
});

function getThingForQuery(res, thing) {
  return res
    .json()
    .then(({ query }) =>
      query.includes("count") ? smallThing(thing) : extraThing(thing)
    );
}

const worker = setupWorker(
  // - AUTHORIZATION NOT REQUIRED -

  // LOGIN
  graphql.mutation("Login", (req, res, ctx) => {
    updateStore({ isAuthorized: true });
    return delayedResponse(() => res(ctx.data({ login: { user } })));
  }),
  // LOGOUT
  graphql.mutation("Logout", (req, res, ctx) => {
    updateStore({ isAuthorized: false });
    return delayedResponse(() => res(ctx.data({ logout: { user } })));
  }),
  // SIGNUP
  graphql.mutation("Signup", (req, res, ctx) => {
    updateStore({ isAuthorized: true });
    return delayedResponse(() => res(ctx.data({ signup: { user } })));
  }),
  // GET USER
  graphql.query("GetUser", (req, res, ctx) => {
    const responseUser = store.isAuthorized ? user : null;
    return delayedResponse(() => res(ctx.data({ user: responseUser })));
  }),

  // - AUTHORIZATION REQUIRED -
  // GET ALL THINGS
  graphql.query("GetThings", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const minimalThings = store.things.map(smallThing);
    return delayedResponse(() => res(ctx.data({ things: minimalThings })));
  }),
  // GET SINGLE THING
  graphql.query("GetThing", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    console.log("What are variables?", req.variables);
    const { id: tid } = req.variables;
    const thing = store.things.find(({ id }) => id === tid);
    return delayedResponse(() => res(ctx.data({ thing: extraThing(thing) })));
  }),
  // DELETE THING
  graphql.mutation("DeleteThing", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { id: tid } = req.variables;
    const things = store.things.filter(({ id }) => id !== tid);
    updateStore({ things });
    return delayedResponse(() =>
      res(ctx.data({ deletething: { thing: { id: tid } } }))
    );
  }),
  // ADD A THING
  graphql.mutation("AddThing", async (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { name, description } = req.variables;
    const newThing = { id: uuid(), done: [], name, description };
    const things = store.things.concat([newThing]);
    updateStore({ things });
    return delayedResponse(() =>
      res(ctx.data({ addthing: { thing: smallThing(newThing) } }))
    );
  }),
  // DELETE LAST DONE FOR THING
  graphql.mutation("UndoLastThing", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { id: tid } = req.variables;
    let updatedThing = null;
    const things = store.things.map((thing) => {
      if (thing.id !== tid) return thing;
      updatedThing = { ...thing, done: thing.done.slice(0, -1) };
      return updatedThing;
    });
    updateStore({ things });
    return getThingForQuery(req, updatedThing).then((queriedThing) =>
      delayedResponse(() =>
        res(ctx.data({ undolastthing: { thing: queriedThing } }))
      )
    );
  }),
  // DELETE DONE FOR THING
  graphql.mutation("UndoThing", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { id: tid, did } = req.variables;
    let updatedThing = null;
    const things = store.things.map((thing) => {
      if (thing.id !== tid) return thing;
      updatedThing = {
        ...thing,
        done: thing.done.filter(({ id }) => id !== did),
      };
      return updatedThing;
    });
    updateStore({ things });
    return getThingForQuery(req, updatedThing).then((queriedThing) =>
      delayedResponse(() =>
        res(ctx.data({ undothing: { thing: queriedThing } }))
      )
    );
  }),
  // DO A THING (ADD A DONE)
  graphql.mutation("DoThing", (req, res, ctx) => {
    const invalid = missingAuth(res, ctx);
    if (invalid) {
      return invalid;
    }
    const { id: tid } = req.variables;
    const newDone = { id: uuid(), time: new Date().getTime() };
    let updatedThing = null;
    const things = store.things.map((thing) => {
      if (thing.id !== tid) return thing;
      updatedThing = { ...thing, done: thing.done.concat([newDone]) };
      return updatedThing;
    });
    updateStore({ things });
    return getThingForQuery(req, updatedThing).then((queriedThing) =>
      delayedResponse(() => res(ctx.data({ dothing: { thing: queriedThing } })))
    );
  })
);

// Register the Service Worker and enable the mocking
export default worker;
