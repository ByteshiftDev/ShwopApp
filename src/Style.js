import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const halfWidth = (width/2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
  },
  icon:{ //icon for navigator
    width: 24,
    height: 24
  },
  searchBar:{
    margin: 20,
    height: 40,
    paddingLeft: 5,
    paddingRight: 5,
    borderWidth: 1,
    borderColor: '#d7d7d7',
    backgroundColor: '#d7d7d7',
    borderRadius: 8,
    color: '#4d4d4d',
    //backgroundImage:
  },

  gridItem:{
    //backgroundColor: '#CCC',
    margin: 1,
    width: halfWidth,
    height: 200,
    //paddingLeft: 10
  },

});

export default styles;
