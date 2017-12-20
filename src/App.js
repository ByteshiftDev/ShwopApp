import React from 'react';
import styles from './Style.js';
import MainTabNavigator from './Navigation.js';


export default class App extends React.Component {
  // Calls the tab navigator that holds the main four pages
  render() {
    return <MainTabNavigator />;
  }
}
