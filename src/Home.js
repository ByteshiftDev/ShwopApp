import styles from './Style.js';
import React from 'react';
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

class HomeView extends React.Component {

  render() {
    console.log("HOME PAGE")
    const {navigate} = this.props.navigation;
    return (
      //const Grid = ({ItemDisplayView}) => (<GridView navigation={ItemDisplayView} />);
      <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={[
        {image: require("./assets/item.png"), title: 'clothes1', key: 'item1'},
        {image: require("./assets/item.png"), title: 'clothes2', key: 'item2'},
        {image: require("./assets/item.png"), title: 'clothes3', key: 'item3'},
        {image: require("./assets/item.png"), title: 'clothes4', key: 'item4'},
        {image: require("./assets/item.png"), title: 'clothes5', key: 'item5'},
        {image: require("./assets/item.png"), title: 'clothes6', key: 'item6'},
        {image: require("./assets/item.png"), title: 'clothes7', key: 'item7'},
        {image: require("./assets/item.png"), title: 'clothes8', key: 'item8'},
        {image: require("./assets/item.png"), title: 'clothes9', key: 'item9'},
        {image: require("./assets/item.png"), title: 'clothes10', key: 'item10'},
        {image: require("./assets/item.png"), title: 'clothes11', key: 'item11'},
        {image: require("./assets/item.png"), title: 'clothes12', key: 'item12'},
        {image: require("./assets/item.png"), title: 'clothes13', key: 'item13'},
        {image: require("./assets/item.png"), title: 'clothes14', key: 'item14'},
        {image: require("./assets/item.png"), title: 'clothes15', key: 'item15'},
        {image: require("./assets/item.png"), title: 'clothes16', key: 'item16'},
        ]}
        renderItem={({item}) =>
        <TouchableOpacity onPress={() => navigate('DisplayItem', {title: "Testing", key:item.key})}>
          <View style={styles.gridItem}>
            <View style={{alignItems:'center'}}>
              <Image source={item.image} />
            </View>
            <Text>{item.title}</Text>
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
    return(
      <Text>`${navigation.state.params.key}`</Text>
    );
  }
}

const ItemDisplayView = StackNavigator({
  HomeView: {screen: HomeView,
    navigationOptions: ({navigation}) => ({header: false}),
  },
  DisplayItem:{screen: DisplayItemScreen,
    navigationOptions: ({navigation}) => ({
    title: `${navigation.state.params.title}`}),}
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
