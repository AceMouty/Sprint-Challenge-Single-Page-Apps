import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Switch, NavLink, Route } from 'react-router-dom'
import WelcomePage from './WelcomePage'
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodesList';

export default class MenuExampleTabularOnTop extends Component {

  state = {}

  handleItemClick = (e, { name }) => { 
    console.log(this)
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item
            name='Home'
            key="home"
            as={NavLink}
            exact 
            to="/"
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Characters'
            key="characters"
            as={NavLink}
            to="/characters"
            active={activeItem === 'Characters'}
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='Locations'
            key="locations"
            as={NavLink}
            to="/locations" 
            active={activeItem === 'Locations'} 
            onClick={this.handleItemClick}
          />
          <Menu.Item 
            name='Episodes'
            key="episodes"
            as={NavLink}
            to="/episodes" 
            active={activeItem === 'Episodes'} 
            onClick={this.handleItemClick}
          />
          {/* <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </Menu.Item>
          </Menu.Menu> */}
        </Menu>

        <Segment attached='bottom'>
          <Switch>
            <Route exact path="/" component={WelcomePage}/>
            <Route path="/characters" component={CharacterList}/>
            <Route path="/locations" component={LocationList}/>
            <Route path="/episodes" component={EpisodeList}/>
          </Switch>
        </Segment>
      </div>
    )
  }
}