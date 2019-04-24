import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import AppNavigator from './src/navigator/AppNavigator';
import {createAppContainer} from 'react-navigation';

import {Provider} from 'react-redux';
import store from './src/store';

const AppStackNavigatorContainer = createAppContainer(AppNavigator);

const ReduxApp = () => (
    // 配置 Provider 为根组件，同时传入 store 作为其属性
    <Provider store={store}>
      {/* redux 持久化存储 */}
      {/* <PersistGate persistor={persistor}> */}
        <AppStackNavigatorContainer />
      {/* </PersistGate> */}
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
