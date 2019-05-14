import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity,ImageBackground} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';

class HomeJXZT extends Component {
  
  render() {
    return <View style={styles.container}>
      <View style={styles.homeZlbBox}>
        <View style={styles.homeZlbTitle}>
          <Text style={{fontSize:16}}>{this.props.title}</Text>
          <Button 
          title="更多>" 
          type="clear"
          containerStyle={{}}
          buttonStyle={{height:23,paddingTop:0,}}
          titleStyle={{color:'#ff6c00',fontSize:15,marginTop:-2}} 
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
        {
          this.props.list.map((item,key)=>{
            return <ImageBackground
            key={key} 
            resizeMode={'cover'}
            source={item.url} 
            style={styles.homeJXZTImg}
            >
            <Text style={styles.homeJXZTtitle}>{item.text}</Text>
          </ImageBackground>


          })
        }
        </ScrollView>
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
  homeJXZTImg:{
    width:120,
    height:70,
    marginRight:10,
    borderRadius:5,
    overflow:'hidden',
  },
  homeJXZTtitle:{
    textAlign:'center',
    lineHeight:70,
    color:'#fff',
    fontSize:16,
  }

});

export default connect(state => ({ ...state.reducers }), action)(HomeJXZT);