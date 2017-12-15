import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, TextInput, Image, StyleSheet, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import { StackNavigator, reset} from 'react-navigation';
import styles from './Style.js'

class SignIn extends Component {
   state = {
      email: '',
      password: '',
      loggedIn: false
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   login = (email, pass) => {
     if (email == ''){
       alert('Please Enter Your Email!');
     }
     else if(pass == ''){
       alert('Please Enter Your Password!')
     }
     else{
       //alert('email: ' + email + ' password: ' + pass)
       AsyncStorage.setItem('email', email)
       AsyncStorage.setItem('password', pass)

       console.log("GOING HOME");
       this.setState({
         loggedIn: true
       })

       this.render()
     }
   }


   render(){
      //const { navigate } = this.props.navigation;
      console.log("Sign In page");
      /*
      if(this.state.loggedIn === true){
        return <ProfileScreen />
      }*/
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {styles.container}>
          <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>
          <TextInput style = {styles.inputSignIn}
             underlineColorAndroid = "transparent"
             placeholder = " Email"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             keyboardType='email-address'
             onChangeText = {this.handleEmail}/>

          <TextInput secureTextEntry={true} style = {styles.inputSignIn}
             underlineColorAndroid = "transparent"
             placeholder = " Password"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlePassword}/>


            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {this.login(this.state.email, this.state.password);
                        Keyboard.dismiss;
                        this.props.navigation.goBack()}
               }>
               <Text style = {styles.submitButtonTextSignIn}> Sign In </Text>
            </TouchableOpacity>

            <Text> New to Shwop? Sign up for one </Text>
            <TouchableOpacity
              style = {styles.signUpButton}
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style = {styles.signButtonButtonText}> Sign Up! </Text>
            </TouchableOpacity>
         </View>
         </TouchableWithoutFeedback>
      )
   }
}
/*
<TouchableOpacity
  style = {styles.signUpButton}
  onPress={() => navigate('SignUp')}>
  <Text style = {styles.signButtonButtonText}> Sign Up! </Text>
</TouchableOpacity>
*/
export default SignIn


/*
//Unless there are objections, I will begin relocating this to the main stlye sheet.
const styles = StyleSheet.create({
   container: {
     //backgroundColor: 'white',
      paddingTop: 23,
      flex: 1,
   },
   input: {
      margin: 7,
      height: 35,
      borderColor: '#7a42f4',
      borderRadius:10,
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#B8E986',
      padding: 10,
      margin: 10,
      borderRadius:10,
      height: 40,
   },
   submitButtonTextSignIn:{
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white'
   },
   signUpButton:{
     backgroundColor: 'white',
     padding: 10,
     margin: 10,
     borderRadius:10,
     height: 40,
     borderWidth: 1,
     borderColor: '#B8E986',
   },
   signUpButtonText:{
     textAlign: 'center',
     color: '#7a42f4'
   }
})*/
