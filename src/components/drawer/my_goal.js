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
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBox from 'react-native-check-box';

export default class my_goal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color1: 'orange',
        color2:'orange',
        color3:'orange'
    }

  }
  comeback(){
    this.props.navigator.pop();
  }

    _changeStyle(x){
    if(x==='1'){
      this.setState(
        {
          color1:'red',
          color2:'orange',
          color3:'orange'
        })
    }
    else if(x==='2'){
      this.setState(
        {
          color1:'orange',
          color2:'red',
          color3:'orange'
        })
    }
    else if(x==='3'){
      this.setState(
        {
          color1:'orange',
          color2:'orange',
          color3:'red'
        })
    }
  }
  onClick(checked){
    checked=!checked;
  }
  render() {
    let checked =false;
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Icon style={styles.leftText} name="arrow-left" size={30} onPress={this.comeback.bind(this)}/>
            <Text style={styles.midText}>Daily Goal</Text>
           
        </View>

        <View style={styles.rowContainer} >
          
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Set Manually</Text>
            <View style={styles.textin}>
            <TextInput keyboardType = 'numeric' value="64" maxLength = {3} style={styles.intext}/>
            

            <View style={styles.navbarm}>
            <TouchableOpacity onPress={ () => this._changeStyle('1') } style={styles.touchablem}><Text style={{color:this.state.color1,fontSize:20}}>oZ</Text></TouchableOpacity >
            <TouchableOpacity  onPress={ () => this._changeStyle('2') } style={styles.touchablem}><Text style={{color:this.state.color2,fontSize:20}}>ml</Text></TouchableOpacity >
            <TouchableOpacity  onPress={ () => this._changeStyle('3') } style={styles.touchablem}><Text style={{color:this.state.color3,fontSize:20}}>l</Text></TouchableOpacity >
            </View>
          </View>
          </View>
        </View>

        <View style={styles.rowContainer1} >
       <CheckBox
            style={{flex: 1, padding: 10}}
            onClick={()=>this.onClick(checked)}
            isChecked={checked}
            rightText={'Activate inteligent daily goal'} />
          </View>


          <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
    backgroundColor:'#2980b9',
    paddingVertical:10,
    width:70
  },
  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'700'
  },
  touchablem:{
    
    height:50,
    width:50,
    alignItems:'center'
  },
  navbarm:{
    paddingTop:0,
    height: 64,
    width:150,
    
    paddingHorizontal: 5,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center',
  },
  textin:{
    alignItems:'center'
  },
  intext:{
    width:120,
    fontSize:60,
    
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
    marginTop:20,
    width:340,
    
    justifyContent:'center',
    
  },
  rowContainer1: {
    flexDirection: 'row',
    padding: 10,
    marginTop:20,
    width:340,
    
    
    
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


