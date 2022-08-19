import useData from "./useData";

function useCurrentThing() {
  return useData((store) => store.data.currentThing);
}

export default useCurrentThing;
