import useCurrent from "./useCurrent";

function useHasCurrent() {
  return useCurrent((state) => !!state.currentId);
}

export default useHasCurrent;
