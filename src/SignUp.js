import React, { Component } from 'react'
import { View, Text, Keyboard, TouchableOpacity, TextInput, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import styles from './Style.js'

class SignUp extends Component {
   state = {
      email: '',
      password: '',
      name: ''
   }

   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   validateEmail = (email) => {
     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
     if (!filter.test(email.value)) {
       return false;
     }
     return true;
   }

   login = (name, email, pass) => {
     if(name == '', email == '', pass == ''){
       alert("Please enter info!")
     }
     else if (this.validateEmail(email) == false) {
       alert('Please provide a valid email address');
     }
     else{
      alert('name: ' + name + 'email: ' + email + ' password: ' + pass)
      this.props.navigation.goBack();
     }
   }

   render(){
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
         <View style = {styles.container}>
          <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>
          <View style = {{flexDirection:'row'}}>
          <TextInput style = {styles.input}
             underlineColorAndroid = "transparent"
             placeholder = "Name"
             placeholderTextColor = "#9a73ef"
             autoCapitalize = "none"/>
          </View>
          <View style = {{flexDirection:'row'}}>
          <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               keyboardType='email-address'
               onChangeText = {this.handleEmail}/>
            </View>
            <View style = {{flexDirection:'row'}}>
            <TextInput secureTextEntry={true} style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => {
                    this.login(this.state.name, this.state.email, this.state.password)
                  }
               }>
               <Text style = {styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
         </View>
         </TouchableWithoutFeedback>
      )
   }
}

export default SignUp
