import { TabNavigator } from "react-navigation";
import styles from './Style.js';
import SearchScreen from './Search.js';
import ProfileScreen from './Profile.js';
import HomeScreen from './Home.js';
import Categories from './Categories.js';
import React from 'react';
import TileScreen from './Tiles.js';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

/*
class PlaceHolderScreen extends React.Component {
  static navigationOptions = {
    title: 'PlaceHolder',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/small-bookmark.png')}
        style = {styles.icon}
      />
    ),
  };
  render() {
    return(
      <View>
        <Text>Place Holder</Text>
      </View>
    );
  }
}
*/

const ShwopApp = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Search: {
      screen: SearchScreen
    },
    Featured: {
      screen: TileScreen
    },
    Categories: {
      screen: Categories
    },
},
    {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      tabBarOptions: {
        activeTintColor: '#570761',
      },

});

export default ShwopApp;
