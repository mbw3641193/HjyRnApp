import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,AsyncStorage} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Welcome from '../views/Welcome';
import Login from '../views/Login';
import PasswordHandle from '../views/PasswordHandle';

// 首屏
import Home from '../views/Home';
import Mask from '../views/Mask';
import Information from '../views/Information';
import Discovery from '../views/Discovery';
import Account from '../views/Account';

// dtb
import Detail from '../views/dtb/Detail';

// 主页go
// import GoIndexTab1 from '../views/GoIndexTab1';
// import GoIndexTab2 from '../views/GoIndexTab2';




//头部导航堆栈//暂时未使用
// const GoNavigator = createMaterialTopTabNavigator({ //go页面
//   GoIndexTab1: {
//     screen: GoIndexTab1,
//     navigationOptions: {
//       title: 'GoIndexTab1'
//     }
//   },
//   GoIndexTab2: {
//     screen: GoIndexTab2,
//     navigationOptions: {
//       title: 'GoIndexTab2'
//     }
//   }
// })


//底部导航堆栈
const HomeNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialCommunityIcons name={'home-currency-usd'} size={30} style={{ color: tintColor }} />
      }
    }
  },
  Mask: {
    screen: Mask,
    navigationOptions: {
      tabBarLabel: '面膜财经',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialCommunityIcons name={'face'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  Information: {
    screen: Information,
    navigationOptions: {
      tabBarLabel: '资讯',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialIcons name={'message'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  Discovery: {
    screen: Discovery,
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialCommunityIcons name={'compass'} size={26} style={{ color: tintColor }} />
      }
    }
  },
  Account: {
    screen: Account,
    navigationOptions: {
      tabBarLabel: '账户',
      tabBarIcon: ({ tintColor, focused }) => {
        return <MaterialCommunityIcons name={'account'} size={30} style={{ color: tintColor }} />
      },
      tabBarOnPress: async (obj)=>{
        const userData = await AsyncStorage.getItem("persist:root");
        // console.log(AsyncStorage.getAllKeys());
        const isLoginData = JSON.parse(JSON.parse(userData).reducers).isLogin;
        const loginAlreadyData = JSON.parse(JSON.parse(userData).reducers).loginAlready;
        if(isLoginData == true && loginAlreadyData == true){ //已经登录，并且没有关闭app
          obj.defaultHandler();
          return;
        }else if( isLoginData == true && loginAlreadyData == false ){ //已经登录，并且关闭app重新打开
          obj.navigation.navigate('PasswordHandle');
          return;
        }
        obj.navigation.navigate('Login'); // 没有登录
      }
    }
  },
},{
  tabBarOptions: {
    activeTintColor: '#ff6c00',
  }
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
  PasswordHandle:PasswordHandle
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