import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';

export default class GoTab1 extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is GoTab1</Text>
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
