import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View ,Button,FlatList,RefreshControl,ScrollView,TouchableOpacity,Animated} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import { Header,Icon } from 'react-native-elements';

import AccountStickyHead from '../components/account/AccountStickyHead';
import AccountHead from '../components/account/AccountHead';

import LinearGradient from 'react-native-linear-gradient';

class Account extends Component {
  constructor(){
    super();
    this.state = {
      y:new Animated.Value(0),
      loading:false,
      scrollHeight:new Animated.Value(0),
      url:require("../assets/img/headimg.png"),
    }
  }

  changeScroll = (e) => {
    this.setState({y: e.nativeEvent.contentOffset.y});
  };

  loadData = () => {
    console.log(this.state.scrollHeight);

    this.setState({
      loading:true,
    });
    setTimeout(() => {
      this.setState({
        loading:false,
      });
    }, 2000);
  }

  componentDidMount() {
    this.viewDidAppear1 = this.props.navigation.addListener(
      'willFocus',
      (obj) => {
        console.log('aaaaa');
        // this.props.navigation.navigate('Login');
      }
    )
  }

  componentWillMount(){
    // this.opacity = this.state.y.interpolate({
    //   inputRange: [0, 50],
    //   outputRange: [0,1]
    // })

    this.animatedEvent = Animated.event([
      {
        nativeEvent: {
          contentOffset: { y: this.state.y }
        }
      }
    ])
  }

  render() {
    return <LinearGradient
    start={{x: 0, y: 0.4}} end={{x: 0, y: 1.0}}
    locations={[0,0.4,0.41]}
    colors={['#ff6c00','#ff6c00', '#fff']}
    style={styles.linearGradient}>
    <Animated.ScrollView
    style={{backgroundColor:'transparent'}}
    onScroll={this.animatedEvent}
    scrollEventThrottle={16}
    stickyHeaderIndices={[0]}
    refreshControl={
      <RefreshControl
        style={{}}
        title={'refreshing...'}
        tintColor={'#fff'}
        titleColor={'#ff6c00'}
        refreshing={this.state.loading}
        onRefresh={()=>{
          this.loadData();
        }}
      />
    }
    >
      <AccountStickyHead
      url={this.state.url}
      y={this.state.y}
      />

      <View style={styles.container}>
        <AccountHead
        url={this.state.url}
        y={this.state.y}
        />





        {/* <Button title='退出登录' onPress={()=>{
            this.props.logout();
            this.props.navigation.navigate('Home');
        }}/> */}
      </View>
      
    
    

</Animated.ScrollView>
</LinearGradient>

    
      
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:1000,
    backgroundColor: '#f2f2f2',
    marginTop:-90,
  },

});

export default connect(state => ({ ...state.reducers }),action)(Account);