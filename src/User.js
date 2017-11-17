import React, { Component } from 'react'

class User extends Component {
  state = {
     name: '',
     email: '',
     password: '',
  }

  handleName = (text) => {
     this.setState({ name: text })
  }
  handleEmail = (text) => {
     this.setState({ email: text })
  }
  handlePassword = (text) => {
     this.setState({ password: text })
  }

  getName = () =>{
    return name;
  }
  getEmail = () =>{
    return email;
  }
  getPassword = () =>{
    return password;
  }

}
