import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated, ScrollView, TouchableOpacity,Image} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";
import { SafeAreaView } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ifIphoneX} from '../../utils/IsIphoneX';


class AccoundStickyHead extends Component {
  componentWillMount(){
    this.opacity = this.props.y.interpolate({
      inputRange: [0, 200],
      outputRange: [0,1]
    })

  }

  render() {
    return <Animated.View style={[styles.container,{opacity:this.opacity}]}>
        <Image source={this.props.url} resizeMode='cover' style={styles.img}  />
        <View style={styles.topBoxPartBar}></View>
        <TouchableOpacity style={styles.topBoxPart}>
          <Text style={styles.topText1}>总资产</Text>
          <Text style={styles.topText2}>495.90</Text>
        </TouchableOpacity>
        <View style={styles.topBoxPartBar}></View>
        <TouchableOpacity style={styles.topBoxPart}>
          <Text style={styles.topText1}>日收益</Text>
          <Text style={styles.topText2}>+0.02</Text>
        </TouchableOpacity>
        <View style={styles.topBoxPartBar}></View>
        <TouchableOpacity>
          <AntDesign name={'setting'} size={25} style={{color:'#fff',opacity:.8,marginLeft:15,marginTop:5}}/>
        </TouchableOpacity>
      </Animated.View>

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    height:90,
    padding:0,
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#ff6c00',
    marginTop:0,
    ...ifIphoneX({
        paddingTop: 44
    }, {
        paddingTop: 20
    }),
    flexDirection:'row',
  },
  text:{
    marginTop:100
  },
  img:{
    width:35,
    height:35,
    marginRight:15,
  },
  topBoxPart:{
    flex:1,
    paddingLeft:20,
  },
  topBoxPartBar:{
    width:1,
    height:30,
    backgroundColor:'#fff',
    marginTop:3,
    opacity:.3,
  },
  topText1:{
    color:'#fff',
    opacity:.8,
    fontSize:13,
  },
  topText2:{
    color:'#fff',
    fontSize:17,
  }

});

export default connect(state => ({ ...state.reducers }), action)(AccoundStickyHead);