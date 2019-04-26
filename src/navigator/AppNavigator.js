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
import Login from '../views/Login';


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




//头部导航堆栈//暂时未使用
const GoNavigator = createMaterialTopTabNavigator({ //go页面
  GoIndexTab1: {
    screen: GoIndexTab1,
    navigationOptions: {
      title: 'GoIndexTab1'
    }
  },
  GoIndexTab2: {
    screen: GoIndexTab2,
    navigationOptions: {
      title: 'GoIndexTab2'
    }
  }
})


//底部导航堆栈
const HomeNavigator = createBottomTabNavigator({
  HotIndex: {
    screen: HotIndexTab,
    navigationOptions: {
      tabBarLabel: '最热',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons name={'whatshot'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  GoIndex: {
    screen: GoNavigator,
    navigationOptions: {
      tabBarLabel: '趋势',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons name={'whatshot'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  LoveIndex: {
    screen: LoveIndex,
    navigationOptions: {
      tabBarLabel: '收藏',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons name={'favorite'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  MyIndex: {
    screen: MyIndex,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons name={'favorite'} size={26} style={{ color: tintColor }} />
      },
      tabBarOnPress:(obj)=>{
        console.log(obj);
        obj.navigation.navigate('Login');
        // obj.defaultHandler()
      }
    }
  },
});

//引导页，初始化时使用。单独堆栈
const InitNavigator = createStackNavigator({ //欢迎页面
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      header: null //禁用 navigation Bar
    }
  }
})

//普通页面堆栈 //次主堆栈
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: HomeNavigator,
    navigationOptions: {
      header: null //禁用 navigation Bar
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      title: 'Details'
    }
  },
})

//登录页面 modal打开方式 //主堆栈
const MainLoginNavigator = createStackNavigator({
  Primary:MainNavigator,
  Login:Login,
},
{
  mode: 'modal',
  headerMode: 'none',
})

//引导页与其他页面的switch堆栈。引导页只显示一次
export default createAnimatedSwitchNavigator({
  Init: InitNavigator,
  Main: MainLoginNavigator,

}, {
    navigationOptions: {
      header: null //禁用 navigation Bar
    },
    transition: (
      <Transition.Together>
        <Transition.Out
          type="fade"
          durationMs={200}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={1} />
      </Transition.Together>
    ),
  })