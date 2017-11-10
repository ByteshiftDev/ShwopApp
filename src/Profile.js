import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/profile.png')}
        style = {styles.icon}
      / >
    ),
  };
  render() {
    return(
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default ProfileScreen;
