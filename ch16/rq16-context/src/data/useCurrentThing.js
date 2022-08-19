import useData from "./useData";

function useCurrentThing() {
  return useData().state.currentThing;
}

export default useCurrentThing;
