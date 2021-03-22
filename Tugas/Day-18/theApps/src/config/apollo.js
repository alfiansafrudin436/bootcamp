import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import React from 'react';


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/v1/graphql',
  }),
  cache: new InMemoryCache(),
});

// console.log(client)
const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export {GraphProvider};
export default client;
