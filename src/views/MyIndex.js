import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,Button} from 'react-native';


export default class MyIndex extends Component {
  componentWillMount() {

    this.viewDidAppear1 = this.props.navigation.addListener(
      'willFocus',
      (obj) => {
        console.log(obj);
        // this.props.navigation.navigate('Login');
      }
    )

  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>this is MyIndex</Text>
        <Button title='跳转到Login' onPress={()=>{
            this.props.navigation.navigate('Login')
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
