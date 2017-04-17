import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  navbar: {
    paddingTop: 20,
    height: 64,
    
    
    paddingHorizontal: 12,
    flexDirection: 'row', // step 1
    justifyContent: 'space-between', // step 2
    alignItems: 'center',
  },
  leftText: {
    color: '#089de3',
  },
  titleText: {
    fontWeight: '600',
  },
  rightText: {
    color: '#089de3',
  },
});

export default class header extends Component {
  render() {
    return (
      <View style={styles.navbar}>
        <Icon name="bars" size={30} />
        <Text style={styles.titleText}></Text>
        <Icon name="clock-o" size={30} />
      </View>
    );
  }
}