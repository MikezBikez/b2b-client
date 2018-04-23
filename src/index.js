import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

// import Routes from './router'
import App from './ui/components/App'

const client = new ApolloClient({
  link: createHttpLink({ 
  uri: 'http://localhost:4000',
  opts: {
    credentials: 'same-origin',
  }}
  ),
  cache: new InMemoryCache(),
})

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'));
