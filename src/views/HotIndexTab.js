import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,AsyncStorage} from 'react-native';
import { connect } from 'react-redux';
import action from '../store/action';

class HotTab extends Component {

  render(){
    return <View style={styles.container}>
        <Text style={styles.welcome}>{this.props.home}123</Text>
        <Button title='跳转到详情页1' onPress={()=>{
            this.props.navigation.navigate('Detail')
        }}/>
        <Button title='huoqu state-home' onPress={()=>{
            console.log(AsyncStorage.getAllKeys());
            console.log(AsyncStorage.getItem("persist:root"));
            console.log(AsyncStorage.getItem('mbw'));
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
  },
});

export default connect(state => ({ ...state.reducer.welcome }), action.welcome)(HotTab);