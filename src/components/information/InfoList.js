import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,ActivityIndicator,Image,RefreshControl} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";

class InfoList extends Component {
  
  render() {
    return <FlatList
    data = {this.props.list}
    keyExtractor={(item,key) => key.toString()}
    renderItem={({ item }) => (
      <View style={styles.infoListBox}>

        <Placeholder
        isReady={this.props.isReady}
        animation="fade"

        whenReadyRender={() => <TouchableOpacity style={styles.infoListInner}>
            <Image source={item.url}  style={styles.img}  />
            <View style={styles.textBox}>
              <Text numberOfLines={2} style={styles.text1}>{item.title}</Text>
              <Text numberOfLines={2} style={styles.text2}>{item.subTitle}</Text>
              <Text numberOfLines={2} style={styles.text3}>{item.time}</Text>
            </View>
        </TouchableOpacity>}

        renderLeft={() => <Media style={{width:100,height:90}} />}
        >
          <Line width="100%"/>
          <Line width="100%"/>
          <Line width="70%"/>
        </Placeholder>
        
      </View>
    )} 
    
    refreshControl={
      <RefreshControl
        // title={'loading'}
        tintColor={'#ff6c00'}
        refreshing={this.props.loading}
        onRefresh={()=>{
          this.props.loadData();
        }}
      />
    }

    ListFooterComponent={()=> <View style={styles.footer}>
      <ActivityIndicator
        size={'small'}
        color={'#ff6c00'}
        animating={true}
      />
      <Text style={styles.footerText}>努力加载中...</Text>
    </View>}
    onEndReachedThreshold={0.05}
    onEndReached={()=>{
      this.props.loadMoreData();
    }}
    
    />

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    
    marginTop:0,
  },
  infoListBox:{
    backgroundColor: '#fff',
    height:110,
    padding:15,
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    
  },
  infoListInner:{
    flexDirection:'row',
  },
  img:{
    width:100,
    height:90,
    marginRight:10,
  },
  textBox:{
    flex:1,
  },
  text1:{
    height:40,
    fontSize:14,
    color:'#333',
    lineHeight:18,
  },
  text2:{
    height:35,
    fontSize:12,
    color:'#999',
    lineHeight:16,
  },
  text3:{
    height:15,
    fontSize:12,
    color:'#999',
    lineHeight:16,
    textAlign:'right',
  },
  footer:{
    padding:10,
    flexDirection:'row',
    justifyContent:'center',
  },
  footerText:{
    fontSize:12,
    color:'#999',
    marginLeft:5,
    marginTop:3,
  }

});

export default connect(state => ({ ...state.reducers }), action)(InfoList);