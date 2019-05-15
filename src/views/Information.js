import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SafeAreaView} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import InfoList from '../components/information/InfoList';

class Information extends Component {
  constructor(){
    super();
    this.state = {
      infoList:{
        loading:false,
        isReady:false,
        list:[,,,,,,]
      }
    }
  }

  loadData = () => {
    console.log('下拉刷新');
    this.setState({
      infoList:{
        ...this.state.infoList,
        loading:true,
      }
    })
    setTimeout(() => {
      let newList = [
        {
          url:require("../assets/img/homeZlb.jpg"),
          title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
          subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
          time:'4天前'
        },
      ]

      this.setState({
        infoList:{
          ...this.state.infoList,
          loading:false,
          list:newList

        }
      })  
    }, 2000);
  }

  loadMoreData = () => {
    console.log('上拉加载更多');
    setTimeout(() => {
      let newList = [
        {
          url:require("../assets/img/homeZlb.jpg"),
          title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
          subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
          time:'7天前'
        },
        {
          url:require("../assets/img/homeZlb.jpg"),
          title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
          subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
          time:'8天前'
        },
        {
          url:require("../assets/img/homeZlb.jpg"),
          title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
          subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
          time:'9天前'
        },
      ]

      this.setState({
        infoList:{
          ...this.state.infoList,
          loading:false,
          list:[...this.state.infoList.list , ...newList]

        }
      })  
    }, 2000);
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        infoList:{
          ...this.state.infoList,
          isReady:true,
          list:[
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'3天前'
            },
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'2天前'
            },
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'1天前'
            },
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'3天前'
            },
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'2天前'
            },
            {
              url:require("../assets/img/homeZlb.jpg"),
              title:'行为金融学-诺奖得主与国庆大堵车真相诺奖得主与国庆大堵车真相',
              subTitle:'循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网循环的英文怎么写_循环的英语怎么说及英文单词_例句_沪江网',
              time:'1天前'
            },
          ]
        }
      })
    }, 2000);
  }

  render() {
    return <View style={styles.container}>
      <Header
        centerComponent={{ text: '资讯', style: { color: '#fff',fontSize:16 } }}
      />
      <InfoList
      list={this.state.infoList.list}
      isReady={this.state.infoList.isReady}
      loading={this.state.infoList.loading}
      loadData={this.loadData}
      loadMoreData={this.loadMoreData}
      />
    </View>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }
});

export default connect(state => ({ ...state.reducers }), action)(Information);