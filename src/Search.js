import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

class SearchScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: 'Search'};
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style = {styles.searchBar}
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
          PlaceHolder = 'Search'
        />
      </View>
    );
  }
}

export default SearchScreen;
