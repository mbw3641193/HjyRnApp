import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated ,Image,Dimensions,TouchableOpacity,ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';

class HomeZlb extends Component {
  
  render() {
    return <View style={styles.container}>
      <View style={styles.homeZlbBox}>
        <View style={styles.homeZlbTitle}><Text style={{fontSize:16}}>{this.props.titleBig}</Text></View>
        <TouchableOpacity >
          <View style={styles.homeZlbBody}>
            <ImageBackground 
            resizeMode={'cover'}
            source={this.props.url} 
            style={styles.homeZlbImg}
            >
              <Text style={styles.homeZlbSmall}>{this.props.title}</Text>
              <Text style={styles.homeZlbBig}>{this.props.percent}%</Text>
              <Text style={[styles.homeZlbSmall,{paddingTop:5,fontWeight:'normal'}]}>今年以来</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
     

    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginTop:5,
  },
  homeZlbBox:{
    padding:10,
    paddingLeft:15,
    paddingRight:15,
  },
  homeZlbTitle:{
    fontSize:16,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    borderStyle:'solid',
    paddingTop:5,
    paddingBottom:10,
  },
  homeZlbBody:{
    marginTop:10,
    borderRadius:5,
    overflow:'hidden',
  },
  homeZlbImg:{
    height:120,
    paddingLeft:15,
  },
  homeZlbSmall:{
    paddingTop:20,
    color:'#fff',
    fontWeight:'bold',
  },
  homeZlbBig:{
    paddingTop:15,
    fontSize:24,
    fontWeight:'bold',
    color:'#fff'
  }

});

export default connect(state => ({ ...state.reducers }), action)(HomeZlb);