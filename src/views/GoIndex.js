import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

export default class GoIndex extends Component {
  render() {
    const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
      GoTab1:{
        screen:GoTab1,
        navigationOptions:{
          title:'GoTab1'
        }
      },
      GoTab2:{
        screen:GoTab2,
        navigationOptions:{
          title:'GoTab2'
        }
      }
    }));
    return <View style={{marginTop:30,flex:1}}><TabNavigator/></View>
  }
}

class GoTab1 extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is GoTab1</Text>
      </View>
    );
  }
}

class GoTab2 extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is GoTab2</Text>
      </View>
    );
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
