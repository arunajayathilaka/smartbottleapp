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
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class remindertype extends Component {
  redirect(property){

    this.props.navigator.push({
          name: 'reminderd',
          passProps:{
            property:property
          }
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
            <Text style={styles.midText}>Reminders</Text>
           
        </View>

        <TouchableOpacity onPress={() => this.redirect('Smart')}>
        <View>
        <View style={styles.rowContainer} >
          <Icon style={styles.thumb1} name="flag" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Smart Reminder</Text>
            <Text style={styles.titlep2}>Disable</Text>
          </View>
        </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.redirect('Interval')}>
        <View style={styles.rowContainer} >
          <Icon style={styles.thumb1} name="flag" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Interval Reminder</Text>
            <Text style={styles.titlep2}>Disable</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.redirect('Custom')}>
        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="flag" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Custom Reminder</Text>
            <Text style={styles.titlep2}>Disable</Text>
          </View>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titlep2:{
    color:'red'
  },
  thumb1:{
    marginRight:20,
    marginLeft:10
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


