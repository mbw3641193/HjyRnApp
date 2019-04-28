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

> 1. 框架依赖

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

#### 为switch路由添加动画效果

##### 这两个组件位于npm仓库，不在github托管
```
yarn add react-native-reanimated

react-native link react-native-reanimated

yarn add react-navigation-animated-switch
```

#### REDUX
```
yarn add redux react-redux
// npm install --save redux react-redux

yarn add redux-persist //为redux增加持久化功能

```

#### AXIOS （由于自带的FETCH没有拦截器以及响应超市，所以选择使用第三方的AXIOS）
```
yarn add axios
// npm install --save axios

```



***




> 2. 组件依赖

#### 引导页以及轮播组件
```
$ npm i react-native-swiper --save
```

#### 登录之手势密码
```
$ yarn add react-native-gesture-password
```

#### 启动屏
```
yarn add react-native-splash-screen

react-native link react-native-splash-screen


//iOS:
#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "RNSplashScreen.h"  // here

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    // ...other code

    [RNSplashScreen show];  // here
    // or
    //[RNSplashScreen showSplash:@"LaunchScreen" inRootView:rootView];
    return YES;
}

@end
```
***




> 3. 样式依赖

#### react-native-elements 第三方样式库
```
yarn add react-native-elements
```

#### 第三方图标库
```
yarn add react-native-vector-icons  

react-native link react-native-vector-icons
```


