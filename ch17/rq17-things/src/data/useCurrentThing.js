import useData from "./useData";

function useCurrentThing() {
  return useData(({ state }) => state.currentId);
}

export default useCurrentThing;
