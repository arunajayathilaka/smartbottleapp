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
  Navigator
} from 'react-native';
import {Provider} from 'react-redux';

import configureStore from './store.js';
const store = configureStore();


import Splash from './Splash';
import Login from './src/components/login/login';
import home from './src/components/home/home';
import reminder from './src/components/reminder/remindertype';
import reminderd from './src/components/reminder/reminderdetail';
import my_goal from './src/components/drawer/my_goal';
import history from './src/components/drawer/history';
import my_bottle from './src/components/drawer/my_bottle';
import signup from './src/components/signup/signup';
import profile from './src/components/drawer/profile';
import select_bottle from './src/components/bottles/select_bottle';
var ROUTES = {
  login: Login,
  splash:Splash,
  home:home,
  reminder:reminder,
  reminderd:reminderd,
  my_goal:my_goal,
  history:history,
  my_bottle:my_bottle,
    signup:signup,
    profile:profile,
    select_bottle:select_bottle
 
};

export default class smartbottleapp extends Component {

  renderScene(route, navigator) {
    var Component = ROUTES[route.name];
    return <Provider store={store}><Component route={route} navigator={navigator} {...route.passProps} /></Provider>;
  }
  
  render() {
    return (
      <Navigator
        
        initialRoute={ {name: 'login'} }
        renderScene={this.renderScene}
        configureScene={ () => { return Navigator.SceneConfigs.FloatFromRight; } }/>
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

AppRegistry.registerComponent('smartbottleapp', () => smartbottleapp);
