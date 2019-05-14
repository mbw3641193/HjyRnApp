import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated ,Image,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';

class HomeXqd extends Component {
  
  render() {
    return <TouchableOpacity style={styles.container}>
          <View style={styles.homeXqdLeft}>
            <View style={styles.homeXqdLeftTitle}>
              <Text style={styles.homeXqdTitle}>{this.props.title}</Text>
              <Text style={styles.homeXqdDesc}>{this.props.titleSmall}</Text>
            </View>
            <Text style={styles.homeXqdSmall}>{this.props.desc}</Text>
          </View>
          <View style={styles.homeXqdRight}>
              <Text style={styles.homeXqdRightTitle}>{this.props.percent}%</Text>
              <Text style={styles.homeXqdRightDesc}>{this.props.tag}</Text>
          </View>
     
    </TouchableOpacity>
  }
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginTop:5,
    padding:20,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
  },
  homeXqdLeft:{
    flex:1,
  },
  homeXqdLeftTitle:{
    flexDirection:'row',
  },
  homeXqdTitle:{
    fontSize:16,
    color:'#ff6c00',
  },
  homeXqdDesc:{
    marginLeft:8,
    padding:3,
    paddingLeft:10,
    paddingRight:10,
    borderRadius:3,
    fontSize:13,
    overflow:'hidden',
    backgroundColor:'#ffeee1',
    marginTop:-2,
    color:'#ff6c00'
  },
  homeXqdSmall:{
    color:'#ffa05b',
    marginTop:10,
  },
  homeXqdRightTitle:{
    fontSize:24,
    color:'#ff6c00',
    marginTop:-4,
  },
  homeXqdRightDesc:{
    marginTop:5,
    color:'#999',
    fontSize:13
  }

});

export default connect(state => ({ ...state.reducers }), action)(HomeXqd);