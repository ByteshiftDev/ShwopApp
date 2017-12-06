import styles from './Style.js';
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

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
    return <ItemDisplayView />;
  }
}
/*
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
*/

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

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

  render() {
    const {navigate} = this.props.navigation;
    console.log("Attempting to load files from datasource...");
    console.log(this.state.dataSource);
    return (
      //const Grid = ({ItemDisplayView}) => (<GridView navigation={ItemDisplayView} />);
      <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={this.state.dataSource}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => navigate('DisplayItem', {name: item.name, key:item.id, })}>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={{ uri: item.url }} style={{ width: 150, height: 150 }} />
            </View>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
        }
      />
      </View>
    );
  }
}

class DisplayItemScreen extends React.Component{
  render(){
    const {params} = this.props.navigation.state;
    //const {item} = this.props.navigation.state.params;
    return(
      /*<Text>`${navigation.state.params.name}`</Text>*/
      <View>
        <Text>{params.name} " is item number: " {params.key}</Text>
      </View>
    );
  }
}

const ItemDisplayView = StackNavigator({
  HomeView: {screen: HomeView,
    navigationOptions: ({navigation}) => ({header: false}),
  },
  DisplayItem:{screen: DisplayItemScreen,
    navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.name}`}),
  }
},
  //{
  //  headerMode: 'none',
  //}
);


export default HomeScreen;

    //const { navigate } = this.props.navigation;
/*
      <View style={styles.container}>
        <Text>Welcome to Shwop! OWIEURWLI </Text>
        <Image
          source={require('./assets/shwop-portland-or.jpg')}
          style={{width: 333, height: 130}}
        />
      </View>
*/
