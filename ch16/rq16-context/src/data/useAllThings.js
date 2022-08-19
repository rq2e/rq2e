import useData from "./useData";

function useAllThings() {
  return useData().state.things.map(({ id }) => id);
}

export default useAllThings;
