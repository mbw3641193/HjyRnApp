import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';


export default class Welcome extends Component {

    componentDidMount(){
        console.log(this.props);
        setTimeout(()=>{
            this.props.navigation.navigate('Main');
        },2000)
    }

  render() {
    return (
      <SafeAreaView>
        <View>
            <Text style={{textAlign:'center',marginTop:200,fontSize:30}}>Welcome</Text>
        </View>
      </SafeAreaView>
    );
  }
}

