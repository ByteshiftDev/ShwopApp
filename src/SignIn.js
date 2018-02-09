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


   apiCall = (email, pass) => {
     console.log("Making API call...");
     var proceed = false
     return fetch('https://shwop-api.herokuapp.com/members/login',
     {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
          "member":
            {
              "email": email,
              "password": pass
            },
       })
     })
     .then((response) =>{
       if(response.status == 200){
         proceed = true;
         console.log("STATUS 200")
         return response;
       }
       else{
         console.log("STATUS ERROR")
         proceed = false
         return response
       }
     })
     .then((response) => response.json())
<<<<<<< HEAD
     .then((responseJson) => { this.setState({
         loggedIn: true,
         dataSource: responseJson.balance,
       });
       console.log(email);
       console.log(pass);
       console.log("Finished login API call... Done!");
       console.log(this.state.dataSource);
       AsyncStorage.setItem('balance', String(this.state.dataSource));
       return responseJson;
=======
     .then((responseJson) => {
       if(proceed){
         AsyncStorage.setItem('balance', String(this.state.dataSource))
         AsyncStorage.setItem('email', email)
         AsyncStorage.setItem('password', pass)
       }
       console.log("Finished login API call... Done!")
       return proceed
>>>>>>> b14f9b5ddff48b6f76b4adcc1d5089f700afc3dd
     })
     .then(() => {
      if(this.state.loggedIn == true) {
       alert("Log in success!");
       //this.props.navigation.state.params.onGoBack();
       //this.props.navigation.goBack()
      };

     })
     .catch((error) => {
       console.log("THERE WAS AN error")
       console.error(error)
       return false
     });
   }

   login = (email, pass, goingBack) => {
     if (email == ''){
       alert('Please Enter Your Email!')
     }
     else if(pass == ''){
       alert('Please Enter Your Password!')
     }
     else{
<<<<<<< HEAD
       // alert('email: ' + email + ' password: ' + pass)
       // console.log('Login executed!');
       AsyncStorage.setItem('email', email)
       AsyncStorage.setItem('password', pass)
       this.apiCall(email, pass);




       // *******
       // if logged in fails segue back
       //
       // if logged in
       // this.props.navigation.state.params.onGoBack();
       // this.props.navigation.goBack()


     }
       console.log("GOING HOME");
       this.setState({
         loggedIn: true
=======
       console.log("Making API Call");
       this.apiCall(email, pass)
       .then((res) => {
         goingBack(res)
>>>>>>> b14f9b5ddff48b6f76b4adcc1d5089f700afc3dd
       })
     }

   }

   goingBack = (flag) =>{
     if (flag == true) {
       console.log("Logged In")
       this.props.navigation.state.params.onGoBack();
       this.props.navigation.goBack()
     }
     else{
       console.log("Invalid Login")
       alert('Invalid Info');
     }
   }

   render(){
      //const { navigate } = this.props.navigation;
      this.state.loggedIn = false;
      console.log("Sign In page");
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style = {styles.container}>
          <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130, flexDirection: 'column', alignItems:'center'}}/>
          <View style = {{flexDirection:'row'}}>
          <TextInput style = {styles.inputSignIn}
             underlineColorAndroid = "transparent"
             placeholder = " Email"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             keyboardType='email-address'
             onChangeText = {this.handleEmail}/>
          </View>
          <View style = {{flexDirection:'row'}}>
          <TextInput secureTextEntry={true} style = {styles.inputSignIn}
             underlineColorAndroid = "transparent"
             placeholder = " Password"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"
             onChangeText = {this.handlePassword}/>
          </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                          Keyboard.dismiss;
                          this.login(this.state.email, this.state.password, this.goingBack);
                        }
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

export default SignIn
