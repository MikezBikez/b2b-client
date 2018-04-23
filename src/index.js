import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'

// import Routes from './router'
import App from './ui/components/App'

const default_settings = {
  'API_URL':  'http://localhost:3500',
}

let db_uri = process.env.REACT_APP_API_URL
if (!db_uri) {
  console.warn("Warning: no config for API_URL, defaulting to "+default_settings.API_URL)
  db_uri = default_settings.API_URL
}

console.log("Connecting to "+db_uri)
const client = new ApolloClient({
  link: createHttpLink({ 
    uri: db_uri,
    opts: {
      credentials: 'same-origin',
    }
  }),
  cache: new InMemoryCache(),
})
// TODO: What happens if the connect fails, either initially, or at some time later?

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
