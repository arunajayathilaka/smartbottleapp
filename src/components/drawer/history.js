/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  
  View, Text, Navigator 
} from 'react-native';


import { Bar } from 'react-native-pathjs-charts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Scrollitem from './scrollitem';

const styles = StyleSheet.create({
    navbarop: {
    
    height: 50,
    
    width:340,
   
    flexDirection: 'row', // step 1
    justifyContent:'space-between',
    alignItems:'center'
  },
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
    
    justifyContent:'center'
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
  head:{
    alignItems:'center'
  }
});
 

 
export default class history extends Component {

  constructor() {
      super()
      this.state = {
         listItems: [
            {'name': 'Item1', 'id': 1},
            {'name': 'Item2', 'id': 2},
            {'name': 'Item3', 'id': 3},
            {'name': 'Item4', 'id': 4},
            {'name': 'Item5', 'id': 5},
            {'name': 'Item6', 'id': 6},
            {'name': 'Item7', 'id': 7},
            {'name': 'Item8', 'id': 8},
            {'name': 'Item9', 'id': 9},
            {'name': 'Item10', 'id': 10},
            {'name': 'Item11', 'id': 11},
            {'name': 'Item12', 'id': 12}
         ]
      }
   }

    comeback(){
    this.props.navigator.pop();
  };
     render() {
    let data = [
      [{
        "v": 49,
        "name": "mon"
      }],
      [{
        "v": 69,
        "name": "tue"
      }],
      [{
        "v": 29,
        "name": "wed"
      }],
       [{
        "v": 29,
        "name": "thu"
      }],
       [{
        "v": 35,
        "name": "fri"
      }],
       [{
        "v": 80,
        "name": "sat"
      }],
       [{
        "v": 70,
        "name": "sun"
      }]
    ];

    let options = {
      width: 300,
      height: 250,
      margin: {
        top: 20,
        left: 30,
        bottom: 50,
        right: 20
      },
      color: '#2980B9',
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Icon style={styles.leftText} name="arrow-left" size={30} onPress={this.comeback.bind(this)}/>
            <Text style={styles.midText}>Reminders</Text>
           
        </View>
        <Bar data={data} options={options} accessorKey='v'/>

        <View style={styles.head}>
          <Text>Recent logs</Text>
        </View>

        <View>
          <Scrollitem
               listItems = {this.state.listItems}
            />
        </View>
      </View>
    )
  }

}


