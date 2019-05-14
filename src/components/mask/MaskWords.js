import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,ImageBackground,Image} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";
import Ionicons from 'react-native-vector-icons/Ionicons';

class MaskWords extends Component {
  
  render() {

    return <View style={styles.container}>
      <View style={styles.homeZlbBox}>
        <View style={styles.homeZlbTitle}>
          <Text style={{fontSize:16}}>{this.props.title}</Text>
          <Button 
          title="更多>" 
          type="clear"
          buttonStyle={{height:23,paddingTop:0,}}
          titleStyle={{color:'#ff6c00',fontSize:15,marginTop:-2}}
          />
        </View>

        <View style={styles.maskWordslist}>
        {
          this.props.list.map((item,key)=>{
            return <View style={styles.maskWordslistView} key={key}>
              <Placeholder
              isReady={this.props.isReady}
              animation="fade"

              whenReadyRender={() => <TouchableOpacity style={styles.maskWordslistDetail} key={key}>
              <Image source={item.url}  style={styles.img}  />
              <View style={styles.textBox}>
                <Text style={styles.text} numberOfLines={2}>{item.subTitle}</Text>
              </View>
          </TouchableOpacity>}

              renderLeft={() => <Media style={{width:80,height:60}} />}
              >
                <Line width="100%"/>
                <Line width="100%"/>
              </Placeholder>
            </View>
          })
        }
        </View>

        <View style={styles.btnBox}>
          <Button
          onPress={this.props.wordsRefresh} 
          icon={
            <Ionicons
              name="md-refresh"
              size={18}
              color="white"
              style={{marginRight:5}}
            />
          }
          title="换一批" 
          type="solid"
          titleStyle={{color:'#fff',fontSize:15}}
          />
        </View>

        {/* 占位background */}
        
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
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    borderBottomColor:'#eee',
    borderStyle:'solid',
    paddingTop:5,
    paddingBottom:10,
  },
  maskWordslist:{
    
  },
  maskWordslistView:{
    height:80,
    paddingTop:10,
    paddingBottom:10,
    borderBottomWidth:1,
    borderBottomColor:'#eee',
  },
  maskWordslistDetail:{
    flexDirection:'row',
    
  },
  img:{
    width:80,
    height:60,
    marginRight:10,
  },
  textBox:{
    flex:1,
  },
  text:{
    fontSize:15,
    color:'#666',
    lineHeight:18,
  },
  btnBox:{
    paddingTop:10,
    justifyContent:'center',
    alignItems:'center',
  }

});

export default connect(state => ({ ...state.reducers }), action)(MaskWords);