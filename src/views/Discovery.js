import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import DiscoveryAnno from '../components/discovery/DiscoveryAnno';
import DiscoveryActivity from '../components/discovery/DiscoveryActivity';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Discovery extends Component {
  constructor(){
    super();
    this.state = {
      annoList:[
        '五一放假公告通知1',
        '五一放假公告通知2',
        '五一放假公告通知3',
      ],
      imgList:[
        require("../assets/img/homeDtb.jpg"),
        require("../assets/img/homeDtb.jpg"),
        require("../assets/img/homeDtb.jpg"),
      ],
      isReady:false,
    }
  }



  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isReady:true,
      })
    }, 2000);
  }

  render() {
    return <View style={styles.container}>
      <Header
        centerComponent={{ text: '发现', style: { color: '#fff',fontSize:16 } }}
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <DiscoveryAnno
        annoList={this.state.annoList}
        />
        
        <View style={styles.midBox}>

          <TouchableOpacity style={styles.midChild}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name={'shield-check'} size={25} style={styles.icon}/>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>安全保障</Text>
              <Text style={styles.text2}>证监会颁布牌照</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.midChild}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name={'shield-check'} size={25} style={styles.icon}/>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>安全保障</Text>
              <Text style={styles.text2}>证监会颁布牌照</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={[styles.midBox,{marginTop:0,paddingTop:0}]}>

          <TouchableOpacity style={styles.midChild}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name={'shield-check'} size={25} style={styles.icon}/>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>安全保障</Text>
              <Text style={styles.text2}>证监会颁布牌照</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.midChild}>
            <View style={styles.iconBox}>
              <MaterialCommunityIcons name={'shield-check'} size={25} style={styles.icon}/>
            </View>
            <View style={styles.textBox}>
              <Text style={styles.text1}>安全保障</Text>
              <Text style={styles.text2}>证监会颁布牌照</Text>
            </View>
          </TouchableOpacity>

        </View>

        <DiscoveryActivity
        imgList={this.state.imgList}
        isReady={this.state.isReady}
        />
      </ScrollView>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  midBox:{
    padding:15,
    paddingTop:10,
    paddingBottom:10,
    flexDirection:'row',
    backgroundColor:'#fff',
    marginTop:5,
  },
  midChild:{
    padding:5,
    paddingLeft:0,
    paddingRight:0,
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    
  },
  iconBox:{
    backgroundColor:'#ff6c00',
    width:45,
    height:45,
    borderRadius:100,
    
  },
  icon:{
    color:'#fff',
    textAlign:'center',
    lineHeight:45,
  },
  textBox:{
    paddingLeft:10,
    paddingTop:5,
  },
  text1:{
    fontSize:15,
  },
  text2:{
    fontSize:14,
    color:'#999',
    marginTop:7,
  },
});

export default connect(state => ({ ...state.reducers }), action)(Discovery);