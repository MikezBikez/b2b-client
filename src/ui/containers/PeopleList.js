import React from 'react'
import { graphql } from 'react-apollo'
import query from '../../gql/queries/PeopleList'
import { List, Loader } from 'semantic-ui-react'
import Avatar from '../components/Avatar'

const PeopleList = (props) => {

  const renderItems = (people) => {
    return people.map( ({ id, name, surname, isCheckedIn, avatar}) => 
      <List.Item key={id}>            
        <Avatar
          _id={id}
          firstName={name}
          lastName={surname}
          isCheckedin={isCheckedIn}
          fileName={avatar}
        />
      </List.Item> 
    )
  }

    if (props.data.loading) return <Loader active inline='centered'/>

    return (
      <List size='massive' relaxed='very'>
        {renderItems(props.data.people)}
      </List>
    )

}

export default graphql(query, { options: (props) => { return {variables: {term: props.searchTerm} }} })(PeopleList)