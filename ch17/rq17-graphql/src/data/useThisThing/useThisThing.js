import { useQuery, gql } from "@apollo/client";
import useDoThing from "./useDoThing";
import useUndoLastThing from "./useUndoLastThing";
import { setCurrent } from "../useCurrentThing";

const GET_THING = gql`
  query GetThing($id: String!) {
    thing(id: $id) {
      id
      name
      count
    }
  }
`;

function useThisThing(id) {
  const doThing = useDoThing();
  const undoLastThing = useUndoLastThing();
  const {
    data: { thing },
  } = useQuery(GET_THING, { fetchPolicy: "cache-only", variables: { id } });

  return {
    thing,
    seeAllThings: () => setCurrent(null),
    doThing: () => doThing(id, thing),
    undoLastThing: () => undoLastThing(id, thing),
  };
}

export default useThisThing;
