import React from 'react'
import { graphql } from 'react-apollo'
import query from '../../gql/queries/notCheckedInList'
import { Grid, Loader, List, Header } from 'semantic-ui-react'
import Avatar from './Avatar'
import SearchablePeople from './SearchablePeople'
import { withRouter } from 'react-router-dom'

const CheckedInList = (props) => {

  const handleCheckout = (id) => props.history.push(`/people/${id}/confirmCheckout`)

  return (
    <SearchablePeople isCheckedIn={true} onTapAction={handleCheckout } backgroundColor={'WhiteSmoke'} />
  ) 
}

export default withRouter(graphql(query)(CheckedInList))