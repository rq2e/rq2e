import { gql, useMutation } from "@apollo/client";

const UNDOLASTTHING = gql`
  mutation UndoLastThing($id: String!) {
    undolastthing(id: $id) {
      thing {
        id
        name
        count
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
              thing: { ...oldThing, count: oldThing.count - 1 },
            },
          }
        : null,
    });
}

export default useUndoLastThing;
