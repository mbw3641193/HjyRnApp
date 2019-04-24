import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createBottomTabNavigator
} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HotIndex from './HotIndex';
import GoIndex from './GoIndex';
import LoveIndex from './LoveIndex';
import MyIndex from './MyIndex';

const tabNavigator = createBottomTabNavigator({
  HotIndex:{
    screen:HotIndex,
    navigationOptions:{
      tabBarLabel:'最热',
      tabBarIcon:({tintColor,focused})=>{
        return <MaterialIcons name={'whatshot'} size={26} style={{color:tintColor}}/>
      }
    }
  },
  GoIndex:{
    screen:GoIndex,
    navigationOptions:{
      tabBarLabel:'趋势',
      tabBarIcon:({tintColor,focused})=>{
        return <MaterialIcons name={'whatshot'} size={26} style={{color:tintColor}}/>
      }
    }
  },
  LoveIndex:{
    screen:LoveIndex,
    navigationOptions:{
      tabBarLabel:'收藏',
      tabBarIcon:({tintColor,focused})=>{
        return <MaterialIcons name={'favorite'} size={26} style={{color:tintColor}}/>
      }
    }
  },
  MyIndex:{
    screen:MyIndex,
    navigationOptions:{
      tabBarLabel:'我的',
      tabBarIcon:({tintColor,focused})=>{
        return <MaterialIcons name={'favorite'} size={26} style={{color:tintColor}}/>
      }
    }
  },
})

const Tab = createAppContainer(tabNavigator);

export default class HomePage extends Component {
  static router = tabNavigator.router;


  render() {
    return <Tab navigation={this.props.navigation}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color:'blue',
    textAlign: 'center',
    margin: 10,
  },
});
