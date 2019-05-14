import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';

export default class Mask extends Component {
  render() {
    return <View style={styles.container}>
      <Text style={styles.welcome}>this is Mask</Text>
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
    margin: 10,
  },
});
