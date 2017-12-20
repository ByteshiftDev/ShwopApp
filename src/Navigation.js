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

// Stack navigator for the profile page
export const SignInSignUp = StackNavigator({
  Profile: { screen: ProfileScreen },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});

// Tab navigator(main) for the whole application
// location: bottom of the application.
export const MainTabNavigator = TabNavigator({
    // tab navigation options
    Home: {
      screen: HomeScreen,
      // options for the Home button.
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/home-button.png')} style = {styles.icon} />
        ),
      }
    },
    ProfilePage: {
      screen: SignInSignUp,
      // options for the ProfilePage button
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/profile.png')} style = {styles.icon} />
        ),
      }
    },
    Search: {
      screen: SearchScreen,
      // options for the Search button
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/search.png')} style = {styles.icon} />
        ),
      }
    },
    Categories: {
      screen: Categories,
      // options for the Categories button
      navigationOptions: {
        tabBarIcon:(
          <Image source = {require('./assets/icons/small-bookmark.png')} style = {styles.icon} />
        ),
      }
    },
},
    // options for the whole tab navigator 
    {
      tabBarPosition: 'bottom',
      animationEnabled: false,
      swipeEnabled: false,
      tabBarOptions: {
        activeTintColor: '#570761',
      },

});

export default MainTabNavigator;
