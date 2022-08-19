import useData from "./useData";

function useCurrentThing() {
  return useData((state) => state.currentThing);
}

export default useCurrentThing;
