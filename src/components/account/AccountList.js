import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated, ScrollView, TouchableOpacity,Image} from 'react-native';
import { Button,Icon,ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const list = [
  {
    title: '账户安全',
    icon: 'shield-lock',
    color:'#7e57c2'
  },
  {
    title: '风险测评',
    icon: 'information',
    color:'#738ffe'
  },
  {
    title: '银行卡',
    icon: 'credit-card',
    color:'#9ccc65'
  },
  {
    title: '咨询与投诉',
    icon: 'comment-question',
    color:'#ffca28'
  },
  {
    title: '风险提示函',
    icon: 'book-variant',
    color:'#ffa726'
  },
  {
    title: '关于我们',
    icon: 'account-heart',
    color:'#8d6e63'
  },
];

class AccoundList extends Component {

  render() {
    return <View style={styles.container}>
      {
        list.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={<MaterialCommunityIcons name={item.icon} size={25} color={item.color}/>}
            chevron
            containerStyle={index<5?{borderBottomWidth:1,borderBottomColor:'#eee'}:null}
          />
        ))
      }


</View>

        

        


  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
  },



});

export default connect(state => ({ ...state.reducers }), action)(AccoundList);