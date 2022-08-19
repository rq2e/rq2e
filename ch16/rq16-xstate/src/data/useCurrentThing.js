import useData from "./useData";

function useCurrentThing() {
  return useData(({ context }) => context.currentThing);
}

export default useCurrentThing;
