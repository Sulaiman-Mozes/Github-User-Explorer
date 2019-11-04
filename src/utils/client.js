// import ApolloClient from 'apollo-boost';

// const client = new ApolloClient({
//   uri: 'https://api.github.com/graphql',
//   Authorization: process.env.REACT_APP_GITHUB_CLIENT_ID
// });

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    dataIdFromObject: object => object.key || null
  })
});

export default client;
