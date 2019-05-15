import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,ActivityIndicator,Image,RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';

class DiscoveryAnno extends Component {
  
  render() {
    return <View style={styles.container}>
      <Entypo name={'bell'} size={17} style={styles.icon}/>
      <Text style={styles.containerText}>公告</Text>
      <Swiper 
      style={styles.wrapper}
      height={40}
      horizontal={false}
      showsPagination={false}
      removeClippedSubviews={false}
      autoplay
      scrollEnabled={false}
      >
      {
        this.props.annoList.map((item,key)=>{
          return <TouchableOpacity style={styles.swiperText} key={key}>
          <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
        })
      }
        
      </Swiper>

    </View>

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    padding:15,
    paddingTop:0,
    paddingBottom:0,
    backgroundColor:'#fff',
    flexDirection:'row',
  },
  containerText:{
    lineHeight:40,
    marginRight:10,
    color:'#ff6c00'
  },
  wrapper:{
    padding:0,
    margin:0,
  },
  swiperText:{
    // lineHeight:40,
  },
  text:{
    lineHeight:40,
    color:'#666'

  },
  icon:{
    marginTop:11,
    marginRight:3,
    color:'#ff6c00',
  }

});

export default connect(state => ({ ...state.reducers }), action)(DiscoveryAnno);