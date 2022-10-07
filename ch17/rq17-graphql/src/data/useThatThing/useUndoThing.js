import { gql, useMutation } from "@apollo/client";

const UNDOTHING = gql`
  mutation UndoThing($id: String!, $did: String!) {
    undothing(id: $id, did: $did) {
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

function useUndoThing() {
  const [undoThing] = useMutation(UNDOTHING);
  return (id, did, oldThing) =>
    undoThing({
      variables: { id, did },
      optimisticResponse: oldThing
        ? {
            undothing: {
              thing: {
                ...oldThing,
                done: oldThing.done.filter(({ id }) => id !== did),
              },
            },
          }
        : null,
    });
}

export default useUndoThing;
