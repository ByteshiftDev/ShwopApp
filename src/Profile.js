import styles from './Style.js';
import React from 'react';
import SignIn from './SignIn.js';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage, Navigator} from 'react-native';
import {SignInSignUp} from './Navigation.js';

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

  componentDidMount(){
    this._loadInitialState().done();
  }

  componentWillMount(){
    this._loadCurrentState().done();
  }

  _loadCurrentState = async () =>{
    var getEmail = await AsyncStorage.getItem('email')
    var getPassword = await AsyncStorage.getItem('password')
    if (getEmail !== null) {
      this.setState({
        email: getEmail,
        password: getPassword
      })
    }
  }

  _loadInitialState = async () =>{
    var getEmail = await AsyncStorage.getItem('email')
    var getPassword = await AsyncStorage.getItem('password')
    if (getEmail !== null) {
      this.setState({
        email: getEmail,
        password: getPassword
      })
    }
  }

  render() {
    console.log("Profile page")
    if(this.state.email === ''){
      return (
        <View style={styles.container}>
          <Text>Profile Screen</Text>
          <Text>Please sign in!</Text>
          <TouchableOpacity
             onPress = {
                () => {
                this.props.navigation.navigate("SignIn")
              }
             }>
             <Text> Sign In </Text>
          </TouchableOpacity>
        </View>
      )
    }
    else{
      return(
        <View style={styles.container}>
          <Text>Profile Screen</Text>
          <Text>Welcome {this.state.email}</Text>
          <TouchableOpacity
             onPress = {
                () => {this.setState({
                  email: '',
                  password: '',
                })
                this.props.navigation.navigate("Home")
              }

             }>
             <Text> Log Out </Text>
          </TouchableOpacity>
        </View>
      );
    }
  }


}

export default ProfileScreen;
