import { StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');
const halfWidth = (width/2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchContainer:{
    flex: 1,
    paddingTop: 23,
    backgroundColor: 'white',
  },
  profileContainer:{
    flex: 1,
    paddingTop: 23,
    backgroundColor: 'white',
    alignItems:'center',
  },
  pointsBanner:{
    height:100,
    width: width,
    marginTop:10,
    marginBottom:20,
    backgroundColor: '#B8E986',
  },
  itemDisplayContainer:{
    flex: 1,
    paddingTop: 25,
    backgroundColor: 'white',
    alignItems: 'center',
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
    width: 150,
    height: 150,
    margin: 8,
    marginBottom: 0,
  },

  imageTileText: {
    margin: 15,
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    //fontWeight: 'bold',
    //fontStyle: 'italic',
    fontSize: 16,
  },

  imageLarge: {
    width: .9*width,
    height: .9*width,
    margin: 20,
    borderRadius: 20,
  },

  gridItem:{
    //backgroundColor: '#CCC',
    borderWidth: 0,
    //borderColor: '#000000',
    //borderRadius: 20,
    //shadowOffset:{  width: 10,  height: 10,  },
    //shadowColor: '#000000',
    //shadowOpacity: 0.10,
    margin: 5,
    width: 180,
    height: 200,
    //paddingLeft: 10
  },
  banner:{
    width: width,
    height: 200,
  },
  input: {
     margin: 7,
     height: 40,
     borderColor: '#7a42f4',
     flex: 0.8,
     borderRadius:10,
     borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#B8E986',
    padding: 10,
    margin: 10,
    borderRadius:10,
    height: 40,
  },
  submitButtonText:{
     color: 'white'
  },
  inputSignIn: {
     margin: 7,
     height: 35,
     borderColor: '#7a42f4',
     flex: 0.8,
     borderRadius:10,
     borderWidth: 1
  },
  submitButtonTextSignIn:{
     alignItems: 'center',
     justifyContent: 'center',
     color: 'white'
  },
  signUpButton:{
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius:10,
    height: 40,
    borderWidth: 1,
    borderColor: '#B8E986',
  },
  signUpButtonText:{
    textAlign: 'center',
    color: '#7a42f4'
  }
});

export default styles;
