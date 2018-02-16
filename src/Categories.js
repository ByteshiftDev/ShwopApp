import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Button } from 'react-native';
import { TabNavigator } from "react-navigation";

class Women extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Making API call...");
    return fetch('https://shwop-api.herokuapp.com/item/filter?query=womens')
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

  render(){
    console.log("Attempting to load files from datasource...");
    //console.log(this.state.dataSource);
    return(
      <View style={styles.categoriesContainer}>
        <FlatList
          numColumns={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={styles.imageTile} />
            </View>
            <Text style={styles.imageTileText}>{item.name}</Text>
          </View>
        }
        />
      </View>
    );
  }

}

class Men extends React.Component{
  /*
  render(){
    return(
      <View style={styles.categoriesContainer}>
        <Text>Men</Text>
      </View>
    );
  }*/
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Making API call...");
    return fetch('https://shwop-api.herokuapp.com/item/filter?query=mens')
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

  render(){
    console.log("Attempting to load files from datasource...");
    //console.log(this.state.dataSource);
    return(
      <View style={styles.categoriesContainer}>
        <FlatList
          numColumns={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={styles.imageTile} />
            </View>
            <Text style={styles.imageTileText}>{item.name}</Text>
          </View>
        }
        />
      </View>
    );
  }

}

class Girls extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Making API call...");
    return fetch('https://shwop-api.herokuapp.com/item/filter?query=girls')
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

  render(){
    console.log("Attempting to load files from datasource...");
    //console.log(this.state.dataSource);
    return(
      <View style={styles.categoriesContainer}>
        <FlatList
          numColumns={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={styles.imageTile} />
            </View>
            <Text style={styles.imageTileText}>{item.name}</Text>
          </View>
        }
        />
      </View>
    );
  }

}

class Boys extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    console.log("Making API call...");
    return fetch('https://shwop-api.herokuapp.com/item/filter?query=boys')
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

  render(){
    console.log("Attempting to load files from datasource...");
    //console.log(this.state.dataSource);
    return(
      <View style={styles.categoriesContainer}>
        <FlatList
          numColumns={2}
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={styles.imageTile} />
            </View>
            <Text style={styles.imageTileText}>{item.name}</Text>
          </View>
        }
        />
      </View>
    );
  }
}

const SubTabNav = TabNavigator({
    Women: {
      screen: Women
    },
    Men: {
      screen: Men
    },
    Girls: {
      screen: Girls
    },
    Boys: {
      screen: Boys
    },
},
    {
      tabBarPosition: 'top',
      animationEnabled: false,
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: '#570761',
        labelStyle: {fontSize:19},
      },
});

class Categories extends React.Component {
  render() {
    return <SubTabNav />;
  }
}

export default Categories;
