import useData from "./useData";
import { actions } from "./store";
import { useDispatch } from "react-redux";

function useThing(id) {
  const thing = useData((store) => store.data.things.find((t) => t.id === id));
  const dispatch = useDispatch();
  return {
    thing,
    seeThing: () => dispatch(actions.seeThing(id)),
    removeThing: () => dispatch(actions.removeThing(id)),
    doThing: () => dispatch(actions.doThing(id)),
    seeAllThings: () => dispatch(actions.seeAllThings()),
    undoThing: (index) => dispatch(actions.undoThing({ id, index })),
    undoLastThing: () =>
      dispatch(actions.undoThing({ id, index: thing.done.length - 1 })),
  };
}

export default useThing;
