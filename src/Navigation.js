import { TabNavigator, StackNavigator } from "react-navigation";
import styles from './Style.js';
import SearchScreen from './Search.js';
import ProfileScreen from './Profile.js';
import HomeScreen from './Home.js';
import Categories from './Categories.js'
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'
import React from 'react';
import { Image } from 'react-native';

export const SignInSignUp = StackNavigator({
  Profile: { screen: ProfileScreen },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

export const MainTabNavigator = TabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/home-button.png')} style = {styles.icon} />
        ),
      }
    },
    ProfilePage: {
      screen: SignInSignUp,
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/profile.png')} style = {styles.icon} />
        ),
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/search.png')} style = {styles.icon} />
        ),
      }
    },
    Categories: {
      screen: Categories,
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/small-bookmark.png')} style = {styles.icon} />
        ),
      }
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

export default MainTabNavigator;
