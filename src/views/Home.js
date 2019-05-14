import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated ,Image,Dimensions,TouchableOpacity} from 'react-native';
import { Header,SearchBar,Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import Swiper from 'react-native-swiper';

import NumberHome from '../components/home/NumberHome';
import HomeZlb from '../components/home/HomeZlb';
import HomeXqd from '../components/home/HomeXqd';
import HomeJXZT from '../components/home/HomeJXZT';

class HotIndex extends Component {
  constructor() {
    super();
    this.state = {
      headerHeight: new Animated.Value(0), //头部渐变样式
      search: '',     //搜索框
      headerBtnData:[
        {
          button:'headphones',
          text:'联系客服'
        },
        {
          button:'message-square',
          text:'查看消息'
        },
        {
          button:'lock',
          text:'安全保障'
        },
        {
          button:'user-plus',
          text:'邀请好友'
        },
      ],
      bannerImg:[
        require("../assets/img/banner1.png"),
        require("../assets/img/banner1.png"),
        require("../assets/img/banner1.png"),
      ],
      // 正利宝
      zlbList:{
        titleBig:'正利宝  R2',
        url:require("../assets/img/homeZlb.jpg"),
        title:'价值低谷，长期投资',
        percent:'22.21',
      },
      // 定投宝
      dtbList:{
        titleBig:'定投宝  R5',
        url:require("../assets/img/homeDtb.jpg"),
        title:'价值低谷，长期投资',
        percent:'22.21',
      },
      // 小钱袋
      xqdList:{
        title:'小钱袋',
        titleSmall:'货币型',
        desc:'卖出T+0秒级到账，日限额1万',
        percent:'2.16',
        tag:'七日年化收益',
      },
      // 精选主题
      JXZTList:{
        title:'精选主题',
        list:[
          {
            url:require("../assets/img/homeDtb.jpg"),
            text:'信用债'
          },
          {
            url:require("../assets/img/homeDtb.jpg"),
            text:'大宗商品'
          },
          {
            url:require("../assets/img/homeDtb.jpg"),
            text:'房地产证券'
          },
        ]
      }

    }
  }

  //搜索
  updateSearch = search => {
    this.setState({ 
      search 
    });
  };

  //元素加载之前
  componentWillMount() {
    // P.S. -1,41区间的映射是告诉interpolate，所有大于41的值都映射成0,所有小于0的值都映射成40,
    // 这样就不会导致Header在上滑的过程中一直向上滑动了
    this.height = this.state.headerHeight.interpolate({
      inputRange: [-1,0, 170,171],
      outputRange: [70,70, 0,0]
    })

    this.opacity = this.state.headerHeight.interpolate({
      inputRange: [0, 50],
      outputRange: [1,0]
    })

    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.headerHeight }
        }
      }
    ])

  }
  
  render() {
    return <View style={styles.container}>
      <Header
        placement='left'
        centerComponent={
          <SearchBar
            placeholder="基金简称/代码"
            onChangeText={this.updateSearch}
            value={this.state.search}
            containerStyle={{
              flex:1,
              height:20,
              backgroundColor:'transparent',
              marginTop:-10
            }}
            inputContainerStyle={{
              height:20,
              backgroundColor:'#ffad71',
            }}
            inputStyle={{
              height:20,
              fontSize:16
            }}
            showLoading={false}
            platform='ios'
            cancelButtonTitle='取消'
            cancelButtonProps={{
              color:'#fff'
            }}
            />
        }
      />

      {/* 头部伸缩 */}
      <Animated.View style={[styles.headerBottom, { height: this.height }]}>
          {
            this.state.headerBtnData.map((item,key)=>{
              return <Animated.View key={key} style={[styles.headerBottomView,{ opacity: this.opacity }]}>
                <TouchableOpacity>
                  <Feather name={item.button} size={36} style={{ color: '#fff' ,textAlign:'center',marginTop:5}}  />
                  <Text style={{textAlign:'center',color:'#fff',marginTop:5}}>{item.text}</Text>
                </TouchableOpacity>
              </Animated.View>
            })
          }
      </Animated.View>

      {/* 滚动事件 */}
      <Animated.ScrollView showsVerticalScrollIndicator={false} onScroll={this.animatedEvent} scrollEventThrottle={16}>
        <Swiper 
        style={styles.wrapper} 
        loop={true}
        showsPagination={false}
        autoplay={true}
        removeClippedSubviews={false}
        >
          {
            this.state.bannerImg.map((item,key)=>{
              return <View style={styles.slide} key={key}>
              <Image style={styles.image} resizeMode='stretch' source={item}/>
            </View>
            })
          }
            
        </Swiper>

        {/* 上证指数等，封装成组件 */}
        <NumberHome/>

        {/* 8个图标 */}
        <View style={styles.indexPart}>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.indexPart,{marginTop:0,paddingTop:0}]}>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.indexPartView}>
            <AntDesign name={'bank'} size={30} style={{ color: '#ff6c00' ,textAlign:'center'}}  />
            <Text style={styles.indexPartText}>正利宝</Text>
          </TouchableOpacity>
        </View>

        {/* 正利宝 */}
        <HomeZlb 
        url={this.state.zlbList.url} 
        title={this.state.zlbList.title} 
        percent={this.state.zlbList.percent}
        titleBig={this.state.zlbList.titleBig}
        />

        {/* 定投宝 */}
        <HomeZlb 
        url={this.state.dtbList.url} 
        title={this.state.dtbList.title} 
        percent={this.state.dtbList.percent}
        titleBig={this.state.dtbList.titleBig}
        />

        {/* 小钱袋 */}
        <HomeXqd
        title={this.state.xqdList.title}
        titleSmall={this.state.xqdList.titleSmall}
        desc={this.state.xqdList.desc}
        percent={this.state.xqdList.percent}
        tag={this.state.xqdList.tag}
        />

        {/* 精选主题 */}
        <HomeJXZT
        title={this.state.JXZTList.title}
        list={this.state.JXZTList.list}
        />

        <Button title='跳转到详情页1' onPress={() => {
          this.props.navigation.navigate('Detail', {
            isLogin: this.props.isLogin,
          })
        }} />
        <Button title='reset' onPress={() => {
          this.props.firstTimeOut();
        }} />

      </Animated.ScrollView>
    </View>
  }
}
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  welcome: {
    height: 150,
    fontSize: 20,
    backgroundColor: 'pink',
    marginTop: 20,
    color: 'blue',
    textAlign: 'center',
  },
  headerBottom: {
    height: 40,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor: '#ff6c00',
    overflow: 'hidden',
    marginTop:-1
  },
  headerBottomView: {
    flex:1,
  },
  wrapper: {
    height:200,
  },
  slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  image: {
    width,
    flex: 1
  },
  indexPart:{
    flexDirection:'row',
    alignItems:'flex-start',
    backgroundColor:'#fff',
    marginTop:5,
    padding:10,
    paddingTop:15,
    paddingBottom:15
  },
  indexPartView:{
    flex:1,
  },
  indexPartText:{
    textAlign:'center',
  },
});

export default connect(state => ({ ...state.reducers }), action)(HotIndex);