import styles from './Style.js';
import React from 'react';
import SignIn from './SignIn.js';
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
  state = {
     email: '',
     password: '',
  }
  render() {
    if(this.state.email === ''){
      return <SignIn />;
    }
    else{
      return(
        <View>
          <Text>Profile Screen</Text>
        </View>
      );
    }
  }
}

export default ProfileScreen;
