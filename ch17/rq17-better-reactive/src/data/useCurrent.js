import create from "zustand";

const useCurrent = create((set) => ({
  currentId: null,
  seeThing: (id) => set(() => ({ currentId: id })),
  seeAllThings: () => set(() => ({ currentId: null })),
}));

export default useCurrent;
