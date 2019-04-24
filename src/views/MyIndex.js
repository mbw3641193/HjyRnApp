import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class MyIndex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is MyIndex</Text>
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
