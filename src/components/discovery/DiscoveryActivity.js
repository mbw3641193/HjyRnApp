import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,ActivityIndicator,ImageBackground,RefreshControl} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";

class DiscoveryActivity extends Component {
  
  render() {
    return <View style={styles.container}>
    <Text style={styles.containerText}>热门活动</Text>
    {
      this.props.imgList.map((item,key)=>{
          return <View style={styles.imgBigBox} key={key}>
            <Placeholder
              isReady={this.props.isReady}
              animation="fade"

              whenReadyRender={() => <TouchableOpacity>
                <ImageBackground 
                resizeMode={'cover'}
                source={item} 
                style={styles.imgBox}
                >
                </ImageBackground>
              </TouchableOpacity>}
              >

                <Line width="100%" height="100%"/>
              </Placeholder>
          </View>
          
          
      })
    }
      
    </View>

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    padding:15,
    paddingTop:0,
    paddingBottom:0,
    backgroundColor:'#fff',
    marginTop:5,
  },
  containerText:{
    textAlign:'center',
    padding:15,
    paddingBottom:0,
    fontSize:15,
  },
  imgBigBox:{
    height:120,
    marginTop:15,
    paddingLeft:0,
    paddingRight:0,
    borderRadius:5,
    overflow:'hidden',
  },
  imgBox:{
    height:120,
  }

});

export default connect(state => ({ ...state.reducers }), action)(DiscoveryActivity);