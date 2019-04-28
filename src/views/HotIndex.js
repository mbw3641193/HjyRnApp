import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../redux/actions';

class HotIndex extends Component {
  componentWillMount(){
    console.log('123')
  }
  render(){
    return <View style={styles.container}>
        <Text style={styles.welcome}>123</Text>
        <Button title='跳转到详情页1' onPress={()=>{
            this.props.navigation.navigate('Detail', {
                isLogin: this.props.isLogin,
              })
        }}/>
        <Button title='reset' onPress={()=>{
            this.props.firstTimeOut();
        }}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    fontSize: 20,
    color:'blue',
    textAlign: 'center',
  },
});

export default connect(state => ({ ...state.reducers }),action)(HotIndex);