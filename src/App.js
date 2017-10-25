import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";



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

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: 'Second Screen',
  };
  render() {
    return(
      <View>
        <Text>Yo Yo Yo</Text>
      </View>
    );
  }
}

const ShwopApp = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    Second: { screen: SecondScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
