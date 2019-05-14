import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView,ScrollView} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import MaskWords from '../components/mask/MaskWords';

class Mask extends Component {
  constructor(){
    super();
    this.state = {
      wordsList:{
        isReady:true,
        title:'金融百词',
        list:[
          {
            url:require("../assets/img/homeZlb.jpg"),
            subTitle:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相'
          },
          {
            url:require("../assets/img/homeZlb.jpg"),
            subTitle:'行为金融学-诺奖得主与国庆大堵车真相'
          },
          {
            url:require("../assets/img/homeZlb.jpg"),
            subTitle:'行为金融学-诺奖得主与国庆大堵车真相'
          },
        ]
      }
    }
  }

  wordsRefresh = () => {
    console.log(this.state.wordsList.isReady);
    this.setState({
      wordsList:{
        ...this.state.wordsList,
        isReady:false,
      }
    })
    setTimeout(() => {
      this.setState({
        wordsList:{
          ...this.state.wordsList,
          isReady:true,
        }
      })  
    }, 2000);
  }

  render() {
    return <View style={styles.container}>
      <Header
        centerComponent={{ text: '面膜财经', style: { color: '#fff',fontSize:16 } }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* 金融百词 */}
        <MaskWords
        title={this.state.wordsList.title}
        list={this.state.wordsList.list}
        isReady={this.state.wordsList.isReady}
        wordsRefresh={this.wordsRefresh}
        />

        <Text style={styles.welcome}>Waiting...</Text>
        <Text style={styles.welcome}>Waiting...</Text>
        <Text style={styles.welcome}>Waiting...</Text>
        <Text style={styles.welcome}>Waiting...</Text>
      </ScrollView>
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    fontSize: 20,
    height:200,
    lineHeight:200,
    textAlign:'center',
    backgroundColor:'#ffad71',
    color:'#ff6c00',
    margin: 10,
  },
});

export default connect(state => ({ ...state.reducers }), action)(Mask);