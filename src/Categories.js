import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TabNavigator } from "react-navigation";

class Women extends React.Component{
  /*
  render() {
    return <GridView />;
  }*/

  render(){
    return(
      <View>
        <Text>Women</Text>
      </View>
    );
  }

}

class Men extends React.Component{
  /*
  render() {
    return <GridView />;
  }*/

  render(){
    return(
      <View>
        <Text>Men</Text>
      </View>
    );
  }

}

class Girls extends React.Component{
  /*
  render() {
    return <GridView />;
  }*/

  render(){
    return(
      <View>
        <Text>Girls</Text>
      </View>
    );
  }

}

class Boys extends React.Component{
  /*
  render() {
    return <GridView />;
  }*/

  render(){
    return(
      <View>
        <Text>Boys</Text>
      </View>
    );
  }
}

const SubTabNav = TabNavigator({
    Women: {
      screen: Women
    },
    Men: {
      screen: Men
    },
    Girls: {
      screen: Girls
    },
    Boys: {
      screen: Boys
    },
},
    {
      tabBarPosition: 'top',
      animationEnabled: false,
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: '#570761',
        labelStyle: {fontSize:19},
      },
});

class Categories extends React.Component {
  render() {
    return <SubTabNav />;
  }
}

export default Categories;
