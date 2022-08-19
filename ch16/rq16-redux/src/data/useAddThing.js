import { actions } from "./store";
import { useDispatch } from "react-redux";

function useAddThing() {
  const dispatch = useDispatch();
  return (name) => dispatch(actions.addThing(name));
}

export default useAddThing;
