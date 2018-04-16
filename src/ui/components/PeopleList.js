import React from 'react'
import { graphql } from 'react-apollo'
import query from '../../gql/queries/PeopleList'
import { Grid, Loader, List, Header, Input, Icon } from 'semantic-ui-react'
import Avatar from './Avatar'

class PeopleList extends React.PureComponent {
  constructor(props, context) {
    super(props)
    this.state = {searchTerm: ''}
    this.textInput = React.createRef()
    //this.handleInput=this.handleInput.bind(this)
  }
  
  handleInput(e, o) {
    if (e.type == 'change') {  
      this.props.data.refetch({ term: o.value })
      this.setState({searchTerm: o.value})
    }
    // this.textInput.current.focus()
  }

  renderItems = (people) => {
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

  render () {
    console.log(this.props)
    this.props.data.variables.term = this.state.searchTerm
    if (this.props.data.loading) 
      {return (
        <Grid style={{ marginTop: '7em', backgroundColor: 'FloralWhite' }}>
          <Loader active inline='centered'/>
        </Grid>
      )}

    return (

      <Grid style={{ marginTop: '7em', backgroundColor: 'FloralWhite' }}>
          <Input
            // fluid
            // ref={this.textInput}
            // focus={true}
            value={this.state.searchTerm}
            onChange={this.handleInput.bind(this)}
            // icon={<Icon name='search' inverted circular link />}
            placeholder='Search...'
          />    
        <Grid.Row>
          <Header as='h1'>The Back to Bikes Gang</Header>    
        </Grid.Row>        
        <Grid.Row> 

        </Grid.Row>
        <Grid.Row centered>
          <List size='massive' relaxed='very'>
            {this.renderItems(this.props.data.people)}
          </List>
        </Grid.Row>
  
      </Grid>
    )
  }

}

export default graphql(query)(PeopleList)