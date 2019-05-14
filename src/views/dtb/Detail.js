import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


export default class Detail extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#f2f2f2',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:20}}>this is Detail</Text>
      </View>
    );
  }
}


