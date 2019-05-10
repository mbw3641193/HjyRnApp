import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated ,Image,Dimensions} from 'react-native';
import { Header,SearchBar,Icon } from 'react-native-elements';
import Feather from 'react-native-vector-icons/Feather';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import Swiper from 'react-native-swiper';

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
      ]

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
      inputRange: [-1,0, 70,71],
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
      <Animated.View style={[styles.headerBottom, { height: this.height }]}>
          {
            this.state.headerBtnData.map((item,key)=>{
              return <Animated.View key={key} style={[styles.headerBottomView,{ opacity: this.opacity }]}>
                <Feather name={item.button} size={36} style={{ color: '#fff' ,textAlign:'center',marginTop:5}}  />
                <Text style={{textAlign:'center',color:'#fff',marginTop:5}}>{item.text}</Text>
              </Animated.View>
            })
          }
      </Animated.View>
      <Animated.ScrollView onScroll={this.animatedEvent} scrollEventThrottle={16}>
        
        <Swiper 
        style={styles.wrapper} 
        loop={true}
        showsPagination={false}
        autoplay={true}
        >
          {
            this.state.bannerImg.map((item,key)=>{
              return <View style={styles.slide} key={key}>
              <Image style={styles.image} resizeMode='stretch' source={item}/>
            </View>
            })
          }
            
        </Swiper>
        <Text style={styles.welcome}>1</Text>
        <Text style={styles.welcome}>2</Text>
        <Text style={styles.welcome}>3</Text>
        <Text style={styles.welcome}>4</Text>
        <Text style={styles.welcome}>5</Text>
        <Text style={styles.welcome}>6</Text>
        <Text style={styles.welcome}>7</Text>
        <Text style={styles.welcome}>8</Text>
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
});

export default connect(state => ({ ...state.reducers }), action)(HotIndex);