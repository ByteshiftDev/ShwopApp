import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Image, ListView, StyleSheet, ScrollView, Text, View } from 'react-native';
import AppNavigation from './Navigation.js';

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
    return fetch('https://clothing-api.herokuapp.com/items')
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      console.log(typeof(responseJson));
      this.setState({
        isLoading: false,
        dataSource: responseJson,
      });
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render() {
    if (this.state.isLoading) {
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
      <AppNavigation />
      {/*
        <Text>This is a test: {this.state.dataSource[0].name}, {this.state.dataSource[0].url}
        {itemsArray[0].name}

        </Text>

        <Text>
        let myTile = {this.state.dataSource}.map((thisItem, i) => (
          return thisItem.name;
        ));
        </Text>

        {this.state.newData}.map(item) => ()
        <Tile name='1986 Raiders Jacket' pic='http://s7d1.scene7.com/is/image/ShiekhShoes/19-0676.1A?$shiekh_large$'/>
        <Tile name='Pink Sweatervest' pic='https://cdnc.lystit.com/photos/2013/02/20/brooks-brothers-pink-intarsia-sweater-vest-product-1-6567030-719884497.jpeg' />
        <Tile name='Rainbow Leggings' pic='https://rlv.zcache.com/rainbow_flag_leggings-r55446fff4e70446fb3bca6fbcf838ebb_68vic_324.jpg?rlvnet=1' />
        <Tile name='Plaid Skirt' pic='https://cdn.shopify.com/s/files/1/1117/2438/products/dotcomme41_copy_grande.jpg?v=1465780640' />
        <Tile name='80s Parachute Pants' pic='https://cdn-img-2.wanelo.com/p/e3c/da4/c19/1575006c506844fe68e80b6/x354-q80.jpg' />
        */}

        {/*
        <Tile dataSource={this.state.dataSource} pic={this.state.dataSource.url} name={this.state.dataSource.name} />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}, {rowData.url}</Text>}
        />

        {
           this.state.dataSource.map((item) => (
              <TouchableOpacity key = {item.name}>
                 <Text>
                    {item.url}
                 </Text>
              </TouchableOpacity>
           ))
        }

        */}
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
