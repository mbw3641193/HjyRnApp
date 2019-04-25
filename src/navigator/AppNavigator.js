import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Welcome from '../views/Welcome';
import HomePage from '../views/HomePage';


// 首屏
import HotIndex from '../views/HotIndex';
import GoIndex from '../views/GoIndex';
import LoveIndex from '../views/LoveIndex';
import MyIndex from '../views/MyIndex';

// 主页hot
import HotIndexTab from '../views/HotIndexTab';
import Detail from '../views/Detail';

// 主页go
import GoIndexTab1 from '../views/GoIndexTab1';
import GoIndexTab2 from '../views/GoIndexTab2';



const HotNavigator = createStackNavigator({ //hot页面
    HotIndexTab: {
        screen: HotIndexTab,
        navigationOptions: {
            title: 'hot' 
        }
    },
    Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Details' 
        }
    },
})

const GoNavigator = createMaterialTopTabNavigator({ //go页面
    GoIndexTab1:{
        screen:GoIndexTab1,
        navigationOptions:{
          title:'GoIndexTab1'
        }
      },
      GoIndexTab2:{
        screen:GoIndexTab2,
        navigationOptions:{
          title:'GoIndexTab2'
        }
      }
})



const HomeNavigator = createBottomTabNavigator({
    HotIndex:{
      screen:HotNavigator,
      navigationOptions:{
        tabBarLabel:'最热',
        tabBarIcon:({tintColor,focused})=>{
          return <MaterialIcons name={'whatshot'} size={26} style={{color:tintColor}}/>
        }
      }
    },
    GoIndex:{
      screen:GoNavigator,
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
});


const InitNavigator = createStackNavigator({ //欢迎页面
    Welcome: {
        screen: Welcome,
        navigationOptions: {
            header: null //禁用 navigation Bar
        }
    }
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomeNavigator,
        navigationOptions: {
            header: null //禁用 navigation Bar
        }
    },
    
})

export default createAnimatedSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
    
},{
    navigationOptions: {
        header: null //禁用 navigation Bar
    }
})