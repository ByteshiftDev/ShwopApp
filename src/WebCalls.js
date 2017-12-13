import React, { Component } from 'react'

export default class WebCalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      POSTRequest: false,
    }
  }


  GETCall = (APILink) =>{
    return fetch(APILink)
      .then((response) => response.json())
      .then((responseJson) => {
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  POSTCall = (APILink, request) => {
    return fetch(APILink,{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(request)
    })
      .then((response) => {
        console.log(response);
        this.setState({ POSTRequest: true })
      })
      .catch((error) => {
        console.error(error);
        this.setState({ POSTRequest: false})
      });
  }


}
