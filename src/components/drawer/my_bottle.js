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
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

export default class my_bottle extends Component {
  redirect(){

    this.props.navigator.push({
          name: 'reminderd'
        });
  }
  comeback(){
    this.props.navigator.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Icon style={styles.leftText} name="arrow-left" size={30} onPress={this.comeback.bind(this)}/>
            <Text style={styles.midText}>My Bottles</Text>
           
        </View>

        
        
        <View style={styles.rowContainer} >
          <Image style={styles.thumb1} source={require('../../images/bottle.png')}/>
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>my gym bottle</Text>
             
          </View>
          <Icon.Button name="pencil" iconStyle={{marginLeft:10}} size={15} backgroundColor="#3b5998" onPress={this.loginWithFacebook}></Icon.Button>
        </View>

        <View style={styles.rowContainer} >
          <Image style={styles.thumb1} source={require('../../images/bottle.png')}/>
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>my office bottle</Text>
            
          </View>
          <Icon.Button name="pencil" iconStyle={{marginLeft:10}} size={15} backgroundColor="#3b5998" onPress={this.loginWithFacebook}></Icon.Button>
        
        </View>

        
       <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="New Bottle" onPress={() => console.log("notes tapped!")}>
            <Icon name="plus" style={styles.actionButtonIcon} />
          </ActionButton.Item>
         
        </ActionButton>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  titlep2:{
    color:'red'
  },
  thumb1:{
    marginRight:20,
    marginLeft:10,
    height:20,
    width:20
  },
  title: {
    fontSize: 15,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop:20,
    width:340,
    justifyContent:'center',
    alignItems:'center'
    
  },
  textContainer: {
    flex: 1,
    justifyContent:'center'
  },
  leftText:{
    color: '#089de3',
    marginLeft:5,
  },
  midText:{
    marginLeft:40,
    fontSize:20
  },
   navbar: {
    
    height: 64,
    
    width:340,
   
    flexDirection: 'row', // step 1
    
    alignItems: 'center',
  },
  container: {
    flex: 1,
    
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});


