import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import AppNavigator from './src/navigator/AppNavigator';
import {createAppContainer} from 'react-navigation';

import {Provider} from 'react-redux';
import configureStore from './src/store';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'react-native-elements';

const AppStackNavigatorContainer = createAppContainer(AppNavigator);

const { persistor, store } = configureStore();

const theme = {
    Button: {
        titleStyle: {
            color: '#fff',
        },
    },
};

const ReduxApp = () => (
    // 配置 Provider 为根组件，同时传入 store 作为其属性
    
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            {/* redux 持久化存储 */}
            <PersistGate persistor={persistor}>
                <AppStackNavigatorContainer />
            </PersistGate>
        </ThemeProvider>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
