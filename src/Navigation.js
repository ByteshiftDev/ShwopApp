import { TabNavigator, StackNavigator } from "react-navigation";
import styles from './Style.js';
import SearchScreen from './Search.js';
import ProfileScreen from './Profile.js';
import HomeScreen from './Home.js';
import Categories from './Categories.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import TileScreen from './Tiles.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export const SignInSignUp = StackNavigator({
  Profile: { screen: ProfileScreen },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

export const ShwopApp = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    ProfilePage: {
      screen: SignInSignUp
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

//export default ShwopApp;
