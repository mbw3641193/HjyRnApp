# HJY-App

#### 本项目为企业级别项目，虽然开源但是禁止作为商用，如有发现追究责任。
###### "react-native": "0.59.5"

## 启动项目
```
react-native run-ios
```

## 重启packager
```
npm run start
```


## 项目依赖

> 1. 框架级别依赖

#### react-navigation
```
yarn add react-navigation
// or with npm
// npm install --save react-navigation

yarn add react-native-gesture-handler
// or with npm
// npm install --save react-native-gesture-handler

react-native link react-native-gesture-handler
```

#### REDUX
```
yarn add redux react-redux
// npm install --save redux react-redux

```

#### AXIOS （由于自带的FETCH没有拦截器以及响应超市，所以选择使用第三方的AXIOS）
```
yarn add axios
// npm install --save axios

```





> 2. 样式级别依赖

#### 第三方图标库
```
yarn add react-native-vector-icons  

react-native link react-native-vector-icons
```
