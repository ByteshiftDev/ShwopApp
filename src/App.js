import React from 'react';
import styles from './Style.js';
import MainTabNavigator from './Navigation.js';


export default class App extends React.Component {

  render() {
    return <MainTabNavigator />;
    /*(
      <View style={styles.container}>
        <Text>Welcome to Shwop!</Text>
        <Image source={require('./assets/shwop-portland-or.jpg')} style={{width: 333, height: 130}}/>
      </View>
    );*/
  }
}
