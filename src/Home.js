import styles from './Style.js';
import React from 'react';
import GridView from './GridView.js'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/home-button.png')}
        style = {styles.icon}
      / >
    ),
  };
  render() {
    //const { navigate } = this.props.navigation;
    return <GridView />;
  }
}

export default HomeScreen;


/*
      <View style={styles.container}>
        <Text>Welcome to Shwop! OWIEURWLI </Text>
        <Image
          source={require('./assets/shwop-portland-or.jpg')}
          style={{width: 333, height: 130}}
        />
      </View>
*/
