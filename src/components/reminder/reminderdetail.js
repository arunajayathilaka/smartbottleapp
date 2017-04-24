/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, Switch, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import {bindActionCreators} from 'redux';
import {connect} from '../../../node_modules/react-redux/src';
import * as Actions from '../../actions';

class reminderdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reminderType:'',
      enabled:props.enabled,
      stime:props.stime,
      etime:props.etime,
      interval:props.interval,
      time:props.time

      
    }
  }

   comeback(){
    this.props.navigator.pop();
  };

  renderView(){
    
    if(this.props.property==='Smart'){
      return(
      <View>
      <View style={styles.navbarop}>
            <Text>Start Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.stime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({stime: time});}}/>
         
           
        </View>

        <View style={styles.navbarop}>
            <Text>End Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.etime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({etime: time});}}/>
           
        </View>

       
        </View>
      );

    }
    else if(this.props.property==='Interval'){
        return(
      <View>
      <View style={styles.navbarop}>
            <Text>Start Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.stime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({stime: time});}}/>
         
           
        </View>

        <View style={styles.navbarop}>
            <Text>End Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.etime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({etime: time});}}/>
           
        </View>

        <View style={styles.navbarop}>
            <Text>Interval</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.interval}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({interval: time});}}/>
           
        </View>

        
        </View>
      );
    }
    else if(this.props.property==='Custom'){
        return(
      <View>
      <View style={styles.navbarop}>
            <Text>Start Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.stime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({stime: time});}}/>
         
           
        </View>

        <View style={styles.navbarop}>
            <Text>End Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.etime}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({etime: time});}}/>
           
        </View>

        

        <View style={styles.navbarop}>
            <Text>Time</Text>
            <DatePicker
          style={{width: 200}}
          date={this.state.time}
          mode="time"
          format="HH:mm"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          minuteInterval={10}
          onDateChange={(time) => {this.setState({time: time});}}/>
           
        </View>
        </View>
      );
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Icon style={styles.leftText} name="arrow-left" size={30} onPress={this.comeback.bind(this)}/>
            <Text style={styles.midText}>Reminder Detail</Text>
           
        </View>


        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="flag" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>{this.props.property} Reminder</Text>
            
          </View>
        </View>


        <View style={styles.navbarop}>
            <Text>Enabled</Text>
            <Switch
          onValueChange={(value) => this.setState({enabled: value,reminderType:this.props.property})}
          
          value={this.state.enabled} />
           
        </View>
        
        {this.renderView()}
        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.saveReminder(this.state)}>
        <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators(Actions,dispatch);
}

function mapStateToProps(state) {
  return {
    reminderType:state.reminderType,
    enabled:state.enabled,
    stime:state.stime,
    etime:state.etime,
    interval:state.interval,
    time:state.time
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

export default connect(mapStateToProps, mapDispatchToProps)(reminderdetail)
