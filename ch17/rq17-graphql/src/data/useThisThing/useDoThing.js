import { gql, useMutation } from "@apollo/client";

const DOTHING = gql`
  mutation DoThing($id: String!) {
    dothing(id: $id) {
      thing {
        id
        name
        count
      }
    }
  }
`;

function useDoThing() {
  const [doThing] = useMutation(DOTHING);
  return (id, oldThing) =>
    doThing({
      variables: { id },
      optimisticResponse: oldThing
        ? {
            dothing: {
              thing: { ...oldThing, count: oldThing.count + 1 },
            },
          }
        : null,
    });
}

export default useDoThing;
