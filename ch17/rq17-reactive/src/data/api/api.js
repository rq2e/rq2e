const URLS = {
  SESSION: "/api/session",
  USER: "/api/user",
  THINGS: "/api/things",
  THING: (id) => `/api/things/${id}`,
  DONES: (id) => `/api/things/${id}/done`,
  DONE: (id, did) => `/api/things/${id}/done/${did}`,
};

const wrappedFetch = (...args) => {
  return fetch(...args).then((res) => {
    if (!res.ok) {
      throw new Error("Unauthorized");
    }
    return res.json();
  });
};

const get = (url) => wrappedFetch(url);
const post = (url, data) =>
  wrappedFetch(url, { method: "POST", body: data && JSON.stringify(data) });
const remove = (url) => wrappedFetch(url, { method: "DELETE" });

// USER API
const getUser = () => get(URLS.USER);
const login = (data) => post(URLS.SESSION, data);
const signup = (data) => post(URLS.USER, data);
const logout = () => remove(URLS.SESSION);

// THING API
const loadThings = () => get(URLS.THINGS);
const loadThing = (id) => get(URLS.THING(id));
const addThing = (data) => post(URLS.THINGS, data);
const removeThing = (id) => remove(URLS.THING(id));
const doThing = (id) => post(URLS.DONES(id));
const undoThing = ({ id, did }) => remove(URLS.DONE(id, did));

export {
  getUser,
  login,
  signup,
  logout,
  loadThings,
  loadThing,
  addThing,
  removeThing,
  doThing,
  undoThing,
};
