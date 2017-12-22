import styles from './Style.js';
import React from 'react';
import SignIn from './SignIn.js';
import { StyleSheet, Text, View, TouchableOpacity, Image, AsyncStorage, Navigator} from 'react-native';
import {SignInSignUp} from './Navigation.js';

class ProfileScreen extends React.Component {
  state = {
     email: '',
     password: '',
     points: 10,
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

  refresh(){
    console.log("Go back is called");
    this._loadCurrentState().done();
    this.render();
  }

  signOut(){
    console.log("Signing out");
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('password');
  }



  render() {
    console.log("Profile page")
    if(this.state.email === ''){
      return (
        <View style={styles.profileContainer}>
          <Text>Profile Screen</Text>
          <Text>Please sign in!</Text>
          <TouchableOpacity
             style = {styles.submitButton}
             onPress = {
                () => {
                this.props.navigation.navigate("SignIn",{
                  onGoBack: () => this.refresh(),
                })
              }
             }>
             <Text> Sign In! </Text>
          </TouchableOpacity>
          <Text> New to Shwop? Sign up for one </Text>
          <TouchableOpacity
            style = {styles.signUpButton}
            onPress={() => this.props.navigation.navigate('SignUp')}>
            <Text style = {styles.signButtonButtonText}> Sign Up! </Text>
          </TouchableOpacity>
        </View>
      )
    }
    else{
      return(
        <View style={styles.profileContainer}>
          <Text style={{textAlign:'center'}}>Profile Screen</Text>
          <Text style={{textAlign:'center'}}>Welcome {this.state.email}</Text>
          <View style={styles.pointsBanner}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:10}}> Current Points </Text>
            <Text style={{fontSize:27, textAlign:'center'}}> {this.state.points} </Text>
          </View>
          <TouchableOpacity
             onPress = {
                () => {this.setState({
                  email: '',
                  password: '',
                })
                this.signOut();
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
