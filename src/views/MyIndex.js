import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,Button} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../redux/actions';

class MyIndex extends Component {
  componentWillMount() {
    console.log('ppppp');
    this.viewDidAppear1 = this.props.navigation.addListener(
      'willFocus',
      (obj) => {
        console.log('aaaaa');
        // this.props.navigation.navigate('Login');
      }
    )

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>登录状态</Text>
        <Button title='退出登录' onPress={()=>{
            this.props.logout();
            this.props.navigation.navigate('HotIndex');
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    margin: 10,
  },
});

export default connect(state => ({ ...state.reducers }),action)(MyIndex);