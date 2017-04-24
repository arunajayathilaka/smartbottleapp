import React, { Component } from 'react';
import {Button, View, StyleSheet, Image, Text, TouchableHighlight, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class cont extends Component {

  redirect(name){
    this.props.navigator.push({
          name: name
        });
  }
  render() {
    return (
      <View>
      <View>
        <TouchableOpacity onPress={() => this.redirect('profile')}>
       <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={require('../../images/user1.png')} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>User</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.separator}/>
      </View>
        <TouchableOpacity onPress={() => this.redirect('history')}>
         <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="history" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>History</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.separator}/>
      <TouchableOpacity onPress={() => this.redirect('my_goal')}>
        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="tasks" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Daily Goal</Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={styles.separator}/>

        <TouchableOpacity onPress={() => this.redirect('my_bottle')}>
        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="glass" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>My Bottle</Text>
          </View>
        </View>
        <View style={styles.separator}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.redirect('profile')}>
        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="cogs" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Settings</Text>
          </View>
        </View>
        </TouchableOpacity>

        <View style={styles.separator}/>
        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="comments-o" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>Feedback</Text>
          </View>
        </View>
        <View style={styles.separator}/>

        <View style={styles.rowContainer}>
          <Icon style={styles.thumb1} name="rss" size={30} />
          <View  style={styles.textContainer}>
            
            <Text style={styles.title}
                  numberOfLines={1}>About us</Text>
          </View>
        </View>
        <View style={styles.separator}/>
        
      </View>
    )
  }
}
var styles = StyleSheet.create({
  thumb1:{
    marginRight:10
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius:70
  },
  textContainer: {
    flex: 1,
    justifyContent:'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});