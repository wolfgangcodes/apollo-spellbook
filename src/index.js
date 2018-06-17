import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { clientLink } from './links/clientLink';
import { errorLink } from './links/errorLink';

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, clientLink(cache)]),
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
