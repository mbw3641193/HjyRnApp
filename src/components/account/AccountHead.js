import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated, ScrollView, TouchableOpacity,Image} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";
import { SafeAreaView } from 'react-navigation';
import {ifIphoneX} from '../../utils/IsIphoneX';
import AntDesign from 'react-native-vector-icons/AntDesign';

class AccoundHead extends Component {
  componentWillMount(){
    this.opacity = this.props.y.interpolate({
      inputRange: [0, 200],
      outputRange: [1,0]
    })

  }

  render() {
    return <View style={styles.container}>
      <Animated.View style={{opacity:this.opacity}}>
        <View style={styles.button}>
          <TouchableOpacity>
            <AntDesign name={'setting'} size={25} style={{color:'#fff',opacity:.8}}/>
          </TouchableOpacity>
        </View>

        <View style={styles.head}>
          <Image source={this.props.url} resizeMode='cover' style={styles.img}  />
          <View style={styles.text}>
            <Text style={styles.text1}>马博文</Text>
            <Text style={styles.text2}>156******53</Text>
          </View>
        </View>

        <View style={styles.mainBox}>
          <View style={styles.topBox}>
            <TouchableOpacity style={styles.topBoxPart}>
              <Text style={styles.topText1}>总资产</Text>
              <Text style={styles.topText2}>495.90</Text>
            </TouchableOpacity>
            <View style={styles.topBoxPartBar}></View>
            <TouchableOpacity style={styles.topBoxPart}>
              <Text style={styles.topText1}>日收益</Text>
              <Text style={[styles.topText2,{color:'red'}]}>+0.02</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bottomBox}>
            <Text style={styles.bottomBoxText}>进入详情查看更多信息</Text>
          </View>
        </View>
      
      </Animated.View>

    </View>

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    padding:15,
    backgroundColor:'#ff6c00',
    ...ifIphoneX({
        paddingTop: 44,
        height:230,
    }, {
        paddingTop: 20,
        height:206,
    })
  },
  button:{
    paddingTop:10,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  head:{
    flexDirection:'row',
  },
  img:{
    width:50,
    height:50,
  },
  text:{
    paddingLeft:10,
    paddingTop:5,
  },
  text1:{
    fontSize:20,
    color:'#fff',
    marginBottom:5,
  },
  text2:{
    fontSize:14,
    color:'#fff',
    opacity:.8,
  },
  mainBox:{
    backgroundColor:'#fff',
    height:125,
    marginTop:15,
    borderRadius:8,
    // shadowColor: '#000',
    // shadowOffset: {
    //     width: 10,
    //     height: 50
    // },
    // shadowRadius: 10,
  },
  topBox:{
    flexDirection:'row',
  },
  topBoxPart:{
    flex:1,
    paddingLeft:25,
    paddingTop:20,
  },
  topBoxPartBar:{
    width:1,
    height:50,
    backgroundColor:'#eee',
    marginTop:23,
  },
  topText1:{
    fontSize:14,
    color:'#999',
  },
  topText2:{
    fontSize:25,
    paddingTop:10,
  },
  bottomBox:{
    marginTop:9,
    backgroundColor:'#f9f9f9'
  },
  bottomBoxText:{
    lineHeight:40,
    textAlign:'center',
    color:'#999',
    
  }



});

export default connect(state => ({ ...state.reducers }), action)(AccoundHead);