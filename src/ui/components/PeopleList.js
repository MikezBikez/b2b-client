import React from 'react'
import { graphql } from 'react-apollo'
import query from '../../gql/queries/PeopleList'
import { Grid, Loader, List, Header } from 'semantic-ui-react'
import Avatar from './Avatar'

const PeopleList = (props) => {

  const renderItems = (people) =>
    people.map( ({ id, name, surname, isCheckedIn, avatar}) => 
      <List.Item key={id}>            
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
    <Grid style={{ marginTop: '7em', backgroundColor: 'FloralWhite' }}>
      <Header as='h1'>The Back to Bikes Gang</Header>
      <List size='massive' relaxed='very'>
        {renderItems(props.data.people)}
      </List>
    </Grid>
  )
}

export default graphql(query)(PeopleList)