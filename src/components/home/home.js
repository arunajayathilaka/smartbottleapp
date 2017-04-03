/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cap}>
            <View style={styles.captop}>
            </View>
            <View style={styles.capseal}>
            </View>
         </View>
        <View
         style={styles.glass}>
          
        <View style={styles.water}></View>
      </View>

      <View style={styles.bottomp}>
        <View style={styles.bottomp1}>
          <Text style={styles.bottomp1Text}>64</Text>
        </View>
        <View style={styles.bottomp1}>
          <Text style={styles.bottomp1Text}>64</Text>
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomp:{
    flex:1,
    flexDirection:'row',
    
  },
  bottomp1:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bottomp1Text:{
    fontSize:50
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  glass: {
    marginTop:0,
    margin: 100,
    height: 300,
    width: 110,
    position: "relative",
    borderStyle: "solid",
    borderWidth: 10,
    borderColor: "lightgray",
    borderRadius: 10
  },
  cap: {
    marginTop:50,

    borderColor: "lightgray",
    width: 60,
    borderStyle: "solid",
    borderWidth:5,
    borderTopLeftRadius: 8,
    borderTopRightRadius:8,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:12,
    
    height: 30
   
  },
  captop: {
    backgroundColor: "#ededed",
    height: 20,
    
    borderTopLeftRadius: 5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:4,
    borderBottomRightRadius:4,
  },
  capseal: {
    marginTop:20,
    backgroundColor: "red",
    height: 6,
    
    borderTopLeftRadius: 0,
    borderTopRightRadius:0,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
  },
  water: {
    width:90 ,
    height: 50,
    backgroundColor: "skyblue",
    position: "absolute",
    bottom: 0
  }

});

