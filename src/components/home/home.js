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
  Image,
  TouchableHighlight,
  View,Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
//import header from '../header/header';

import Drawer from 'react-native-drawer';
import Cont from './cont';
export default class home extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  redirectReminder(){
    this.props.navigator.push({
          name: 'reminder'
        });
  };
  redirect(){
    this.props.navigator.push({
          name: 'my_goal'
        });
  };
  render() {
    return (
     
      
        <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Cont navigator={this.props.navigator} closewin={this.closeControlPanel.bind(this)}/>}
        openDrawerOffset={0.2}

        >
        <View style={styles.container}>
         <View style={styles.navbar}>
            <Icon style={styles.leftText} name="bars" size={30} onPress={this.openControlPanel.bind(this)} />
            
            <Icon style={styles.rightText} name="clock-o" size={30} onPress={this.redirectReminder.bind(this)}/>
        </View>
      
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
      <TouchableHighlight style={styles.bottomp1} onPress={this.redirect.bind(this)}>
        <View >
          <Text>To Go</Text>
          <Text><Text style={styles.bottomp1Text}>64.0</Text><Text style={styles.bottomp1text2}>L</Text></Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={styles.bottomp2}>
        <View>
          <Text>Goal</Text>
          <Text><Text style={styles.bottomp1Text}>64.0</Text><Text style={styles.bottomp1text2}>L</Text></Text>
        </View>
        </TouchableHighlight>
      </View>

      <View style={styles.bottomwp}> 
        <Image
            style={styles.logo}
            source={require('../../images/weather.png')}/><Text style={styles.weathertext}> Weather conditions</Text><Text style={styles.datetext}>Fri, Apr 7</Text>
      </View>
      </View>
      </Drawer>
     
      
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    
    height: 64,
    
    width:340,
   
    flexDirection: 'row', // step 1
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftText: {
    color: '#089de3',
    marginLeft:5,
   // marginRight:270
  },
  rightText: {
    color: '#089de3',
    marginRight:5,

  },
  wrapper:{
    flex:1
  },
  datetext:{
     marginRight: 10,
  },
  weathertext:{
    marginRight: 20,
    flex: 1
  },
  logo:{
    height:50,
    width:50,
    
    marginLeft:10
  },
  bottomp:{
    flex:1,
    flexDirection:'row',
    
    
    
  },
  bottomwp:{
    height:50,
    
    flexDirection:'row',
    
    justifyContent: 'space-between',
    alignItems: 'center'
    
  },
  bottomp1text2:{
    fontSize:30
  },
  bottomp1:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99ada7',
    borderStyle:'solid',
    borderWidth:1,
    height:90

  },
  bottomp2:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99ada7',
    borderStyle:'solid',
    borderWidth:1,
    height:90

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
    margin: 60,
    height: 300,
    width: 110,
    position: "relative",
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "lightgray",
    borderRadius: 10
  },
  cap: {
    marginTop:20,

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
    width:100 ,
    height: 50,
    backgroundColor: "skyblue",
    position: "absolute",
    bottom: 0
  }

});

