import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const halfWidth = (width/2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: "white",
    flex: 1,
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

  imageTile: {
    //borderWidth: 2,
    //borderColor: '#000000',
    borderRadius: 20,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: '#000000',
    shadowOpacity: 1.0,
    width: 150,
    height: 150,
    margin: 8,
    marginBottom: 0,
  },

  imageTileText: {
    margin: 15,
    marginTop: 5,
  },

  gridItem:{
    //backgroundColor: '#CCC',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 20,
    shadowOffset:{  width: 10,  height: 10,  },
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    margin: 5,
    width: halfWidth,
    height: 200,
    //paddingLeft: 10
  },

});

export default styles;
