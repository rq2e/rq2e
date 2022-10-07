import { gql, useMutation } from "@apollo/client";

const UNDOLASTTHING = gql`
  mutation UndoLastThing($id: String!) {
    undolastthing(id: $id) {
      thing {
        id
        name
        description
        done {
          id
          time
        }
      }
    }
  }
`;

function useUndoLastThing() {
  const [undoLastThing] = useMutation(UNDOLASTTHING);
  return (id, oldThing) =>
    undoLastThing({
      variables: { id },
      optimisticResponse: oldThing
        ? {
            undolastthing: {
              thing: { ...oldThing, done: oldThing.done.slice(0, -1) },
            },
          }
        : null,
    });
}

export default useUndoLastThing;
