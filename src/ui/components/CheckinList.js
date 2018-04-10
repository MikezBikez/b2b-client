import React from 'react'
import { graphql } from 'react-apollo'
import query from '../../gql/queries/notCheckedInList'
import { Grid, Loader, List, Header } from 'semantic-ui-react'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom'

const CheckinList = (props) => {

  const handleCheckin = (id) => {
    props.history.push(`/people/${id}/confirmCheckin`)
  }
  
  const renderItems = (notCheckedIn) =>
    notCheckedIn.map( ({ id, name, surname, isCheckedIn, avatar}) => 
      <List.Item key={id} onClick={ () => handleCheckin(id) } >            
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
      style={{ marginTop: '7em', backgroundColor: 'Snow'}}
      columns={13}
      relaxed='very'
    >
      <Header as='h1'>Ready for Check In</Header>
      <List size='massive'>
        {renderItems(props.data.notCheckedIn)}
      </List>
    </Grid>  
  ) 
}

export default withRouter(graphql(query)(CheckinList))