import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  rootElement,
);
