import { gql, useMutation } from "@apollo/client";

const DOTHING = gql`
  mutation DoThing($id: String!) {
    dothing(id: $id) {
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

function useDoThing() {
  const [doThing] = useMutation(DOTHING);
  return (id, oldThing) =>
    doThing({
      variables: { id },
      optimisticResponse: oldThing
        ? {
            dothing: {
              thing: {
                ...oldThing,
                done: oldThing.done.concat([
                  { id: "pending", time: new Date() },
                ]),
              },
            },
          }
        : null,
    });
}

export default useDoThing;
