import styles from './Style.js';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

// Class that holds the stack navigation for the clothing items
class HomeScreen extends React.Component {
  render() {
    return <ItemDisplayView />;
  }
}

// The main home view that holds the top displayed item
class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  // function that makes the API call to retrieve clothing items
  componentDidMount() {
    console.log("Making API call...");
    return fetch('https://clothing-api.herokuapp.com/items')
    .then((response) => response.json())
    .then((responseJson) => { this.setState({
        isLoading: false,
        dataSource: responseJson,
      });
      console.log("Finished API call... Done!")
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // displays a banner and a scrollview of the items
  // when a user press onto a item square it stacks a new view
  // of the item
  render() {
    console.log("HOME PAGE")
    const {navigate} = this.props.navigation;
    console.log("Attempting to load files from datasource...");
    console.log(this.state.dataSource);
    return (
      //const Grid = ({ItemDisplayView}) => (<GridView navigation={ItemDisplayView} />);
      <View style={styles.container}>
      <View><Image source={require('./assets/cover.jpg')} style={styles.banner}  /></View>
      <FlatList
        numColumns={2}
        data={this.state.dataSource}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => navigate('DisplayItem', {name: item.name, key: item.id, url: item.url})}>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={styles.imageTile} />
            </View>
            <Text style={styles.imageTileText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
        }
      />
      </View>
    );
  }
}

// Displays item that the user clicked on to view
// displays the item's image and information 
class DisplayItemScreen extends React.Component{
  render(){
    const {params} = this.props.navigation.state;
    //const {item} = this.props.navigation.state.params;
    return(
      <View style={{backgroundColor: 'white'}}>
        <Image source={{ uri:params.url }} style={styles.imageLarge} />
        <Text style={{textAlign:'center', fontSize:30}}>{params.name}</Text>
        <Text>{params.name} is item number: {params.key} that has url: {params.url}</Text>
      </View>
    );
  }
}

// stack navigator that holds the home view and the item display View
// have it so users can go back and forth between viewing items.
const ItemDisplayView = StackNavigator({
  HomeView: {screen: HomeView,
    navigationOptions: ({navigation}) => ({header: false}),
  },
  DisplayItem:{screen: DisplayItemScreen,
    navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.name}`}),
  }
},
);

export default HomeScreen;
