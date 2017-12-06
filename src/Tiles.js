import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ListView, StyleSheet, ScrollView, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";

class Tile extends Component {
  render() {
    return (
      <View>
        <Image source={{ uri: this.props.pic }} style={{width: 150, height: 150}}/>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default class TileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Mounting...");
    return fetch('https://clothing-api.herokuapp.com/items')
      .then((response) => response.json())
      .then((responseJson) => { this.setState({
          //Problem Here
          isLoading: false,
          dataSource: responseJson,
        });
        console.log(this.state.isLoading)
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
    }
    
  render() {
    if (this.state.isLoading) {
      console.log("TESTING LOADING");
      return (
        <View style={{flex: 1, paddingTop: 40}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 40}}>
      <FlatList
        data={this.state.dataSource}
        renderItem={ ({item}) =>
          <View>
          <Text>{item.name}</Text>
          <Image source={item.url} style={{ width: 150, height: 150}}/>
          </View>

        }
      />
        <Tile name={this.state.dataSource[0].name} pic={this.state.dataSource[0].url} />
        <Tile name={this.state.dataSource[1].name} pic={this.state.dataSource[1].url} />
        <Tile name={this.state.dataSource[2].name} pic={this.state.dataSource[2].url} />
        <Tile name={this.state.dataSource[3].name} pic={this.state.dataSource[3].url} />
        <Tile name={this.state.dataSource[4].name} pic={this.state.dataSource[4].url} />
        <Tile name={this.state.dataSource[5].name} pic={this.state.dataSource[5].url} />
        <Tile name={this.state.dataSource[6].name} pic={this.state.dataSource[6].url} />
        <Tile name={this.state.dataSource[7].name} pic={this.state.dataSource[7].url} />
      </View>
      //This will need to be improved with the use of flexbox and further styling.
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
