import React from 'react'
import {graphql} from 'react-apollo'
import query from '../../gql/queries/CheckedInList'
import { Grid, Loader, List, Header } from 'semantic-ui-react'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom'

const CheckedInList = (props) => {

  const handleCheckout = (id) => props.history.push(`/people/${id}/confirmCheckout`)
  
  const renderItems = (checkedIn) =>
    (checkedIn  || []).map( ({ id, name, surname, isCheckedIn, avatar}) => 
      <List.Item key={id} onClick={ () => handleCheckout(id) } >            
        <Avatar
          _id={id}
          firstName={name}
          lastName={surname}
          isCheckedin={isCheckedIn}
          fileName={avatar}
        />
      </List.Item> )

    if (props.data.loading) {return <Loader active inline='centered'/>}

    return (
      <Grid 
        style={{ marginTop: '7em', backgroundColor: 'WhiteSmoke'}}
        columns={3}
        relaxed='very'
      >
        <Header as='h1'>Who's in Today</Header>
        <List size='massive'>
          {renderItems(props.data.checkedIn)}
        </List>
      </Grid>  
    ) 
}

export default withRouter(graphql(query)(CheckedInList))