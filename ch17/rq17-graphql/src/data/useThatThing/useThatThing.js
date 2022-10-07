import { useQuery, gql } from "@apollo/client";
import useDoThing from "./useDoThing";
import useUndoThing from "./useUndoThing";
import useUndoLastThing from "./useUndoLastThing";
import useRemoveThing from "./useRemoveThing";
import { setCurrent } from "../useCurrentThing";

const GET_THING = gql`
  query GetThing($id: String!) {
    thing(id: $id) {
      id
      name
      description
      done {
        id
        time
      }
    }
  }
`;

function useThatThing(id) {
  const doThing = useDoThing();
  const undoThing = useUndoThing();
  const undoLastThing = useUndoLastThing();
  const removeThing = useRemoveThing();
  const { loading, error, data } = useQuery(GET_THING, { variables: { id } });

  const thing = !loading && !error ? data.thing : null;

  return {
    thing,
    seeAllThings: () => setCurrent(null),
    doThing: () => doThing(id, thing),
    undoLastThing: () => undoLastThing(id, thing),
    undoThing: (did) => undoThing(id, did, thing),
    removeThing: () => removeThing(id),
  };
}

export default useThatThing;
