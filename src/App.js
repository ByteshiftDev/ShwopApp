import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home page',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/home-button.png')}
        style = {styles.icon}
      / >
    ),
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
  render() {
    return(
      <View>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/zoom-out-button.png')}
        style = {styles.icon}
      / >
    ),
  };
  render() {
    return(
      <View>
        <Text>Search Screen</Text>
      </View>
    );
  }
}

class PlaceHolderScreen extends React.Component {
  static navigationOptions = {
    title: 'PlaceHolder',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/small-bookmark.png')}
        style = {styles.icon}
      / >
    ),
  };
  render() {
    return(
      <View>
        <Text>Place Holder</Text>
      </View>
    );
  }
}

const ShwopApp = TabNavigator({
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Search: {
      screen: SearchScreen
    },
    PlaceHolder: {
      screen: PlaceHolderScreen
    }
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

  icon:{
    width: 24,
    height: 24
  },
});
