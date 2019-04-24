import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default class Welcome extends Component {

    componentDidMount(){
        console.log(this.props);
        // setTimeout(()=>{
        //     this.props.navigation.navigate('Main');
        // },2000)
    }

  render() {
    return (
        <Swiper style={styles.wrapper} loop={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

