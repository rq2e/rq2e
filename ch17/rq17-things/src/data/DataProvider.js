import { useState, useMemo } from "react";

import DataContext from "./DataContext";
import Loader from "./Loader";
import useAPI from "./useAPI";

function DataProvider({ children }) {
  const { isAuthorized, isLoading, API } = useAPI();

  const [things, setThings] = useState([]);
  const [currentId, setCurrentId] = useState(null);
  const [currentThing, setCurrentThing] = useState(null);

  const actions = useMemo(() => {
    const { getUser, signup, login, logout } = API;
    const loadThings = () => API.loadThings().then(setThings);
    const loadThing = (id) => API.loadThing(id).then(setCurrentThing);
    const addThing = (data) => API.addThing(data).then(loadThings);
    const seeThing = (id) => setCurrentId(id);
    const seeAllThings = () => setCurrentId(null);
    const removeThing = (id) => API.removeThing(id).then(seeAllThings);
    const doThisThing = (id) => API.doThing(id).then(loadThings);
    const undoThisThing = (id, did) => API.undoThing(id, did).then(loadThings);
    const doThatThing = (id) => API.doThing(id).then(() => loadThing(id));
    const undoThatThing = (id, did) =>
      API.undoThing(id, did).then(() => loadThing(id));
    return {
      addThing,
      doThatThing,
      doThisThing,
      getUser,
      loadThing,
      loadThings,
      login,
      logout,
      removeThing,
      seeAllThings,
      seeThing,
      signup,
      undoThatThing,
      undoThisThing,
    };
  }, [API]);
  const value = {
    state: {
      things,
      currentId,
      currentThing,
      isAuthorized,
    },
    actions,
  };

  return (
    <DataContext.Provider value={value}>
      {isLoading && <Loader />}
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
