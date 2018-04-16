import gql from 'graphql-tag'

export default gql`
  query ($term: String) {
    people(searchTerm:$term){
      id
      name
      surname
      avatar
      lastAttend
      isCheckedIn
    }
  }
`