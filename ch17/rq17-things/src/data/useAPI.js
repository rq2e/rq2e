import { useState, useMemo } from "react";

const URLS = {
  SESSION: "/api/session",
  USER: "/api/user",
  THINGS: "/api/things",
  THING: (id) => `/api/things/${id}`,
  DONES: (id) => `/api/things/${id}/done`,
  DONE: (id, did) => `/api/things/${id}/done/${did}`,
};

const get = (url) => fetch(url);
const post = (url, data) =>
  fetch(url, { method: "POST", body: data && JSON.stringify(data) });
const remove = (url) => fetch(url, { method: "DELETE" });

function useAPI() {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const API = useMemo(() => {
    const auth = () => setAuthorized(true);
    const unauth = () => setAuthorized(false);

    // common wrapper for all network requests
    const wrap = (promise) => {
      setLoading(true);
      return (
        promise
          // This is invoked regardless of result
          .finally(() => setLoading(false))
          // This is invoked for all server responses,
          // but .ok is only true for 20x and 30x responses
          .then((res) => {
            if (!res.ok) {
              throw new Error("Unauthorized");
            }
            return res.json();
          })
          // Finally, this catches both network, auth, and server errors
          .catch((e) => {
            unauth();
            throw e;
          })
      );
    };

    // USER API
    const getUser = () => wrap(get(URLS.USER)).then(auth);
    const login = (data) => wrap(post(URLS.SESSION, data)).then(auth);
    const signup = (data) => wrap(post(URLS.USER, data)).then(auth);
    const logout = () => wrap(remove(URLS.SESSION)).then(unauth);

    // THING API
    const loadThings = () => wrap(get(URLS.THINGS));
    const loadThing = (id) => wrap(get(URLS.THING(id)));
    const addThing = (data) => wrap(post(URLS.THINGS, data));
    const removeThing = (id) => wrap(remove(URLS.THING(id)));
    const doThing = (id) => wrap(post(URLS.DONES(id)));
    const undoThing = (id, did) => wrap(remove(URLS.DONE(id, did)));

    return {
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
  }, []);

  return {
    isAuthorized,
    isLoading,
    API,
  };
}

export default useAPI;
