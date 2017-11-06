import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

import SignIn from "./SignIn.js"

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home page'
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to Shwop!</Text>
        <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>

      </View>
    );
  }
}

class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
  };
  render() {
    return(
      <View style={accountStyles.container}>
        <Text>Hi INSERT USER NAME</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', width: 200, height: 100, backgroundColor: 'skyblue'}}>
          <Text> Points Balance </Text>
          <Text> 150 </Text>
        </View>
      </View>
    );
  }
}

const ShwopApp = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    Second: { screen: AccountScreen}
});

export default class App extends React.Component {
  render() {
    return <ShwopApp />;/*(
      <View style={styles.container}>
        <Text>Welcome to Shwop!</Text>
        <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>
      </View>
    );*/
  }
}

const accountStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
