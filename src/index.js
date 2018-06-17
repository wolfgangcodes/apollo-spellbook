import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { defaults } from './resolvers/defaults';
import { selectBreed } from './resolvers/selectBreed';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { typeDefs } from './typeDefs';

const cache = new InMemoryCache();

const clientLink = withClientState({
  defaults,
  resolvers: {
    Mutation: { selectBreed },
    Query: {
      dog(obj, args, context, info) {
        return Object.values(context.cache.data.data).filter(
          dog => dog.__typename === 'Dog' && dog.breed === args.breed
        )[0];
      },
    },
  },
  typeDefs,
  cache,
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, clientLink]),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
