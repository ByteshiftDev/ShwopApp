import styles from './Style.js';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class GridView extends React.Component {
  render() {
    return(//add stuff here
      <View style={styles.gridContainter}>
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
        renderItem={({item}) => <View style={styles.item}><Image source={item.image} style={{}} /><Text style={{textAlign: 'left'}}>{item.title}</Text></View>}
      />
      </View>
    );
  }
}
