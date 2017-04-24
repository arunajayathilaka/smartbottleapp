/**
 * Created by MADHUSHIKA DELGOLLA on 4/22/2017.
 */
import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight, Modal, Picker } from 'react-native';
import DatePicker from 'react-native-datepicker';
export default class signup extends Component{
    state = {
        modalVisible: false,
    }
    setModalVisible(visible){
        this.setState({modalVisible:visible});
    }
    constructor(props){
        super(props);
        state={
            enabled:props.enabled,
            date:props.date,
        }
    }
    onSignupPressed(){
        this.props.navigator.push({
            name: 'login'
        })
    }
    render() {
        return (
            <ScrollView >
                <View style={styles.wrapper} >
                    <View style={styles.container} >
                        <TextInput
                            onChangeText={ (text)=> this.setState({fname: text}) }
                            placeholder="First Name"
                            placeholderTextColor='#131313'
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={ (text)=> this.setState({lname: text}) }
                            placeholder="Last Name"
                            placeholderTextColor='#131313'
                            style={styles.input}
                        />
                        <TextInput
                            onChangeText={ (text)=> this.setState({email: text}) }
                            placeholder="email"
                            placeholderTextColor='#131313'
                            style={styles.input}
                        />
                        <Picker
                            placeholder = "Gender"
                            selectedValue={this.state.gender}
                            style={styles.input}
                            onValueChange={(gender) => this.setState({gender: gender})}>
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                        </Picker>


                        <View >
                                <Text>Date of Birth</Text>
                            <DatePicker
                            style={{width:200}}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate="1940-01-01"
                            maxDate="2018-01-01"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date)=>{this.setState({date:date})}}></DatePicker>

                        </View>
                        <View >
                            <Text style={styles.input}>Your Height</Text>
                        </View>
                        <View >
                            <Text style={styles.input}>Your Weight</Text>
                        </View>

                        <TextInput
                            onChangeText={ (text)=> this.setState({password: text}) }
                            placeholder="Password"
                            placeholderTextColor='#131313'
                            secureTextEntry
                            style={styles.input}/>
                        <TextInput
                            onChangeText={ (text)=> this.setState({password: text}) }
                            placeholder="Confirm Password"
                            placeholderTextColor='#131313'
                            secureTextEntry
                            style={styles.input}/>

                        <TouchableOpacity onPress={this.onSignupPressed.bind(this)} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>SIGNUP</Text>
                        </TouchableOpacity>


                    </View>
                </View>

            </ScrollView>
        );

    }
}


const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:'#afdbf5',
        flex:1,
    },
    container: {
        padding:20,
        borderRadius:4,
        borderWidth: 1,
        borderColor: '#4f2ada'},

    input:{
        height:40,
        width:330,
        backgroundColor:'rgba(255,255,255,0.7)',
        marginBottom:10,
        color:'#131313',
        paddingHorizontal:10
    },
    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:10
    },
    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight:'700'
    }
});

