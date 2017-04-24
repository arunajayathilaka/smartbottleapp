/**
 * Created by MADHUSHIKA DELGOLLA on 4/22/2017.
 */
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight,ScrollView,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';
import ActionButton from 'react-native-action-button';

export default class settings extends Component{
    constructor(props){
        super(props);
        this.state={
            enabled:props.enabled,
            stime:props.stime,
            etime:props.etime,
        }
    }
    comeback(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.navbar}>
                    <Icon style={styles.leftText} name="arrow-left" size={30} onPress={this.comeback.bind(this)}/>
                    <Text style={styles.midText}>Update Profile</Text>
                </View>
                <TouchableHighlight>
                <View style={styles.rowContainer}>
                    <Icon name="user" size={90}></Icon>
                </View>
                </TouchableHighlight>
                <View style={styles.head}>
                    <Text>Update Profile</Text>
                </View>

                <View style={styles.rowContainer}>
                    <Text style={styles.title}>Height</Text>
                    <View>
                        <TextInput keyboardType='numeric' value='2' maxLength={3} style={styles.intext}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.intextN}>m</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>Weight</Text>
                    <View>
                        <TextInput keyboardType='numeric' value='50' maxLength={3} style={styles.intext}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.intextN}>Kg</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <Text style={styles.title}>Exercise Time</Text>
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
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SAVE CHANGES</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        navbar: {
            height: 64,
            width: 340,
            flexDirection: 'row', // step 1
            alignItems: 'center',
        },
        leftText: {
            color: '#089de3',
            marginLeft: 5,
        },
        midText: {
            marginLeft: 40,
            fontSize: 20
        },
        rowContainer: {
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center'
        },
        head: {
            alignItems: 'center'
        },
        title: {
            fontSize: 15,
            color: '#656565',
        },
        intext: {
            marginLeft: 10,
            width: 200
        },
       intextN:{
            fontSize:20,
           color:'#1180ab'
       },
        buttonContainer:{
            backgroundColor:'#2980b9',
            paddingVertical:10,
            width:100
        },
        buttonText:{
            textAlign:'center',
            color:'#FFFFFF',
            fontWeight:'700'
        },
    }
)