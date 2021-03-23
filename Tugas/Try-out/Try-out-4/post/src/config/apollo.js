import React, {useEffect, useState} from 'react';
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

const authLink = setContext((_, {headers}) => {
  const [token, setToken] = useState(null);
  const getToken = async () => {
    try {
      let value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setToken(value)
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getToken();
    console.log(token);
  }, [token]);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

console.log(authLink)

const client = new ApolloClient({
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE2NTMzMTI4fQ.zp-_3Mu1xzHgpJ6Jap26CJZrUtFdrZoS0vHKien7aec`,
  },
  link: new HttpLink({
    uri: 'http://172.19.0.1:3301/api',
  }),
  cache: new InMemoryCache(),
});

const GraphProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
export {GraphProvider};
export default client;
