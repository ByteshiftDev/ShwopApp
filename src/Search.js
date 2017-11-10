import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
    tabBarIcon: () => (
      <Image
        source = {require('./assets/icons/search.png')}
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

export default SearchScreen;
