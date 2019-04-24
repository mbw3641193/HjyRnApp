import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import {createAppContainer} from 'react-navigation';

export default class HotIndex extends Component {
  render(){
    return <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.tabLabel}</Text>
        <Button title='跳转到详情页' onPress={()=>{
            this.props.navigation.navigate('Detail')
        }}/>
    </View>
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

