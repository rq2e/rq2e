import useData from "./useData";

function useAddThing() {
  return useData(({ actions }) => actions.addThing);
}

export default useAddThing;
