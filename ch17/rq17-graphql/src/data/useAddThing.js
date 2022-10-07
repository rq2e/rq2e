import { gql, useMutation } from "@apollo/client";
import { GET_THINGS } from "./useAllThings";

const ADDTHING = gql`
  mutation AddThing($name: String!, $description: String!) {
    addthing(name: $name, description: $description) {
      thing {
        id
        name
        count
      }
    }
  }
`;

function useAddThing() {
  const [addthing] = useMutation(ADDTHING, {
    update: (cache, response) =>
      cache.updateQuery({ query: GET_THINGS }, ({ things }) => ({
        things: things.concat([response.data.addthing.thing]),
      })),
  });
  return (data) =>
    addthing({
      variables: data,
      optimisticResponse: {
        addthing: {
          thing: {
            id: "pending",
            name: data.name,
            count: 0,
            __typename: "Thing",
          },
        },
      },
    });
}

export default useAddThing;
