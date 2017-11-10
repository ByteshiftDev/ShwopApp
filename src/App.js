import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import styles from './Style.js';
import ShwopApp from './Navigation.js';

export default class App extends React.Component {
  render() {
    return <ShwopApp />;
    /*(
      <View style={styles.container}>
        <Text>Welcome to Shwop!</Text>
        <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>
      </View>
    );*/
  }
}
