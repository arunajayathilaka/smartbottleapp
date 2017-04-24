/**
 * Created by MADHUSHIKA DELGOLLA on 4/22/2017.
 */
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, Image, TouchableHighlight, View,Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Swiper from 'react-native-page-swiper';

export default  class select_bottle extends Component {

    constructor(props){
        super(props);
        this.state={
            enabled:props.enabled,

        }
    }
    render() {
        return(
            <
                Swiper
                style = {styles.wrapper
                }
                showsButtons = {true} >
                <View style={styles.slide1}>
                    <View style={styles.cap}>
                        <View style={styles.captop}>
                        </View>
                        <View style={styles.capseal}>
                        </View>
                    </View>
                    <View style={styles.glass}>
                        <View style={styles.water}></View>
                        <View>
                            <Image style={styles.Ruler} source={require('../../images/ruler.png')} />
                        </View>
                    </View>
                    <Text style={styles.text}>My Smart</Text>
                </View>
                < View
                    style = {styles.slide2}>
                    <View style={styles.capA}>
                        <View style={styles.captop}>
                        </View>
                        <View style={styles.capseal}>
                        </View>
                    </View>
                    <View
                        style={styles.glassA}>
                        <View style={styles.water}></View>
                    </View>
                    <Text style={styles.text}>Handy Go</Text>
                < / View >
                <View style={styles.slide3}>
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
                    <Text style={styles.text}>Smart Spooty</Text>
                </View>
            < / Swiper >
        )
    }
    }

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    glass: {
        marginTop:0,
        margin: 60,
        height: 200,
        width: 110,
        position: "relative",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "#000",
        borderRadius: 10
    },
    cap: {
        marginTop:20,

        borderColor: "#000",
        width: 60,
        borderStyle: "solid",
        borderWidth:5,
        borderTopLeftRadius: 8,
        borderTopRightRadius:8,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:12,

        height: 30

    },
    glassA: {
        marginTop:0,
        margin: 60,
        height: 200,
        width: 110,
        position: "relative",
        borderStyle: "solid",
        borderWidth: 5,
        borderColor: "#ca161c",
        borderRadius: 10
    },
    capA: {
        marginTop:20,

        borderColor: "#ca161c",
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
        backgroundColor: "#4f2ada",
        position: "absolute",
        bottom: 0
    },
    Ruler:{
        marginLeft:20,
        marginTop:10,
        marginBottom:0,
        height:180,
        position:"absolute"
    },

});