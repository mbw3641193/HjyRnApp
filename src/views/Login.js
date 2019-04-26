import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../redux/actions';

class Login extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#ddd',justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'blue',fontSize:20}}>this is Login</Text>
        <Button title='login' onPress={()=>{
            this.props.login();
            this.props.navigation.navigate('MyIndex');
        }}/>
      </View>
    );
  }
}

export default connect(state => ({ ...state.reducers }),action)(Login);


