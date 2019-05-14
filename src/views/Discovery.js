import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Discovery extends Component {
  render() {
    console.log('---------');
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is Discovery</Text>
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