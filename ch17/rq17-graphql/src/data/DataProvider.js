import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Loader from "./Loader";

const cache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: [],
    },
    Thing: {
      fields: {
        done: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
    Query: {
      fields: {
        thing: {
          read(_, { args, toReference }) {
            return toReference({
              __typename: "Thing",
              id: args.id,
            });
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
});

function DataProvider({ children }) {
  return (
    <ApolloProvider client={client}>
      <Loader />
      {children}
    </ApolloProvider>
  );
}

export default DataProvider;
