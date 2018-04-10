import React, {PureComponent} from 'react'
import { Menu, Segment } from 'semantic-ui-react'


export default class Header extends PureComponent {
  state = {}

  onApp = () => this.props.history.push('/attendance')
  onWhosIn = () => this.props.history.push('/people/whosIn')
  onCheckin = () => this.props.history.push('/people/checkIn')
  onPeopleList = () => this.props.history.push('/people/list')
  onHome = () => this.props.history.push('/')

  handleItemClick = (e, { name }) => {

    this.setState({ activeItem: name })

    if (name==='logo') {this.onHome()}
    if (name==='app') {this.onApp()}
    if (name==='whosin') {this.onWhosIn()}
    if (name==='checkin') {this.onCheckin()}
    if (name==='gang') {this.onPeopleList()}
      
  }

  render () {
    const { activeItem } = this.state

    return (
      <Segment>
        <Menu fixed='top' inverted borderless>
          <Menu.Item as='h1' 
            name='logo' 
            content='BACK 2 BIKES' 
            active={activeItem === 'logo'}
            onClick={this.handleItemClick}/>
          <Menu.Item 
            name='app'
            content='The App' 
            active={activeItem === 'app'}
            onClick={this.handleItemClick}/>
          <Menu.Item 
            name='whosin'
            content="Who's In Today" 
            active={activeItem === 'whosin'}
            onClick={this.handleItemClick}/>
          <Menu.Item 
            name='checkin' 
            content='Check In' 
            active={activeItem === 'checkin'}
            onClick={this.handleItemClick}/>
          <Menu.Item 
            name='gang' 
            content='The Gang' 
            active={activeItem === 'gang'}
            onClick={this.handleItemClick}/>
        </Menu> 
      </Segment>
    )
  }
}