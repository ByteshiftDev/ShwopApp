import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TabNavigator } from "react-navigation";

class Featured extends React.Component{
  render(){
    return(
      <View>
        <Text>Featured</Text>
      </View>
    );
  }
}

class Women extends React.Component{
  render(){
    return(
      <View>
        <Text>Women</Text>
      </View>
    );
  }
}

class Men extends React.Component{
  render(){
    return(
      <View>
        <Text>Men</Text>
      </View>
    );
  }
}

class Children extends React.Component{
  render(){
    return(
      <View>
        <Text>Children</Text>
      </View>
    );
  }
}

const SubTabNav = TabNavigator({
    Featured: {
      screen: Featured
    },
    Women: {
      screen: Women
    },
    Men: {
      screen: Men
    },
    Children: {
      screen: Children
    },
},
    {
      tabBarPosition: 'top',
      animationEnabled: false,
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: '#570761',
      },

});

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
    return <SubTabNav />;
      /*
      <View style={styles.container}>
        <Text>Welcome to Shwop! OWIEURWLI </Text>
        <Image
          source={require('./assets/shwop-portland-or.jpg')}
          style={{width: 333, height: 130}}
        />
      </View>
      */
    //);
  }
}

export default HomeScreen;
