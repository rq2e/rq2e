import { useEffect } from "react";
import useData from "./useData";

function useAddThing() {
  const getUser = useData(({ actions }) => actions.getUser);
  const isAuthorized = useData(({ state }) => state.isAuthorized);
  useEffect(() => void getUser(), [getUser]);
  return isAuthorized;
}

export default useAddThing;
