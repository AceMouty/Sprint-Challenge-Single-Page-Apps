import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationList from './LocationsList';
import EpisodeList from './EpisodesList';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const panes = [
  {
    menuItem: (
      <Menu.Item key='home' as={NavLink} to="/">
        <Icon name={"home"} size={"large"}/>
				Home
      </Menu.Item>
    ),
    render: () => <Tab.Pane><Route exact path="/" component={WelcomePage}/> </Tab.Pane>,
	},
	{
    menuItem: (
      <Menu.Item key='characters' as={NavLink} activeClassName="active" to="/character">
        <Icon name={"users"} size={"large"}/>
				Characters
      </Menu.Item>
    ),
    render: () => <Tab.Pane> <Route path="/character" component={CharacterList}/></Tab.Pane>,
	},
	{
    menuItem: (
      <Menu.Item key='locations' as={NavLink} activeClassName="active" to="/location">
        <Icon name={"map outline"} size={"large"}/>
				Locations
      </Menu.Item>
    ),
    render: () => <Tab.Pane> <Route path="/location" component={LocationList}/></Tab.Pane>,
	},
	{
    menuItem: (
      <Menu.Item key='episodes' as={NavLink} activeClassName="active" to="/episode">
        <Icon name={"video camera"} size={"large"}/>
				Episodes
      </Menu.Item>
    ),
    render: () => <Tab.Pane> <Route path="/episode" component={EpisodeList}/></Tab.Pane>,
  }
]

const TabExampleCustomMenuItem = () => <Tab panes={panes}/>

export default TabExampleCustomMenuItem

