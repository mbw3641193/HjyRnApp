import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated ,Image,Dimensions,TouchableOpacity,Easing} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Feather from 'react-native-vector-icons/Feather';

class NumberHome extends Component {
  constructor() {
    super();
    this.state = {
      NumberState:true,
      NumberHeight: new Animated.Value(0),
      NumberOpacity: new Animated.Value(0),
      NumberHideOpacity: new Animated.Value(0),
    }
  }

  showDetail = () => {
      this.setState({
        NumberState:false,
      });
      var timing = Animated.timing;
      Animated.parallel(['NumberHeight', 'NumberOpacity','NumberHideOpacity'].map(property => {
              return timing(this.state[property], {
              toValue: 1,
              duration: 200,
              easing: Easing.linear
          });
      })).start();
      this.state.NumberState = false;
      
  }
  hideDetail = () => {
    this.setState({
      NumberState:true,
    })
    var timing = Animated.timing;
    console.log('444');
    Animated.parallel(['NumberHeight', 'NumberOpacity','NumberHideOpacity'].map(property => {
            return timing(this.state[property], {
            toValue: 0,
            duration: 200,
            easing: Easing.linear
        });
    })).start();
}
  //元素加载之前
  componentWillMount() {
    // P.S. -1,41区间的映射是告诉interpolate，所有大于41的值都映射成0,所有小于0的值都映射成40,
    // 这样就不会导致Header在上滑的过程中一直向上滑动了
    this.height = this.state.NumberHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [50,100]
    })

    this.opacity = this.state.NumberOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [0,1]
    })

    this.hideOpacity = this.state.NumberHideOpacity.interpolate({
      inputRange: [0, 1],
      outputRange: [1,0]
    })

    // this.opacity = this.state.headerHeight.interpolate({
    //   inputRange: [0, 50],
    //   outputRange: [1,0]
    // })

    // this.animatedEvent = Animated.event([
    //   {
    //     nativeEvent: {
    //       contentOffset: { y: this.state.NumberHeight }
    //     }
    //   }
    // ])

  }
  
  render() {
    return <View style={styles.container}>
      <TouchableOpacity onPress={this.state.NumberState === true ? this.showDetail : this.hideDetail} >
        <Animated.View style={[styles.numberHeight, { height: this.height }]}>
          
            <Animated.View style={[styles.showBox, { opacity:this.hideOpacity }]}>
              <View style={styles.showBoxLeft}>
                <Text style={styles.showBoxText}>上证指数：</Text>
                <Text style={styles.showBoxText}>2915.55</Text>
              </View>
              <View style={styles.showBoxRight}>
                <Text style={styles.showBoxText}>-23.43</Text>
                <Text style={[styles.showBoxText,{marginLeft:10,marginRight:10,color:'#999'}]}>|</Text>
                <Text style={styles.showBoxText}>-0.80%</Text>
              </View>
              <Feather name={'chevron-down'} size={26} style={styles.showBoxIcon}  />
            </Animated.View>

            <Animated.View style={[styles.hideBox, { opacity:this.opacity }]}>
              <View style={styles.hideBoxPart}>
                <Text style={styles.hideBoxTitle}>上证指数</Text>
                <Text style={styles.hideBoxText}>2915.55</Text>
                <View style={styles.hideBoxSmall}>
                  <Text style={styles.hideBoxSmallText}>-23.43</Text>
                  <Text style={[styles.hideBoxSmallText,{marginLeft:5,marginRight:5,color:'#999'}]}>|</Text>
                  <Text style={styles.hideBoxSmallText}>-0.80%</Text>
                </View>
              </View>

              <Text style={styles.hideBoxBar}></Text>
              <View style={styles.hideBoxPart}>
                <Text style={styles.hideBoxTitle}>上证指数</Text>
                <Text style={styles.hideBoxText}>2915.55</Text>
                <View style={styles.hideBoxSmall}>
                  <Text style={styles.hideBoxSmallText}>-23.43</Text>
                  <Text style={[styles.hideBoxSmallText,{marginLeft:5,marginRight:5,color:'#999'}]}>|</Text>
                  <Text style={styles.hideBoxSmallText}>-0.80%</Text>
                </View>
              </View>

              <Text style={styles.hideBoxBar}></Text>
              <View style={styles.hideBoxPart}>
                <Text style={styles.hideBoxTitle}>上证指数</Text>
                <Text style={styles.hideBoxText}>2915.55</Text>
                <View style={styles.hideBoxSmall}>
                  <Text style={styles.hideBoxSmallText}>-23.43</Text>
                  <Text style={[styles.hideBoxSmallText,{marginLeft:5,marginRight:5,color:'#999'}]}>|</Text>
                  <Text style={styles.hideBoxSmallText}>-0.80%</Text>
                </View>
              </View>

              <Feather name={'chevron-up'} size={26} style={styles.showBoxIcon}  />
            </Animated.View>

        </Animated.View>
      </TouchableOpacity>

    </View>
  }
}
const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#fff',
    marginTop:5,
  },
  numberHeight:{
    backgroundColor: '#fff',
  },
  showBox:{
    height:50,
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    
  },
  showBoxLeft:{
    flex:1,
    height:50,
    flexDirection:'row',
  },
  showBoxRight:{
    flex:1,
    height:50,
    flexDirection:'row',
    justifyContent:'flex-end',
  },
  showBoxIcon:{
    width:30,
    height:50,
    textAlign:'right',
    color:'#999',
    marginTop:1,
  },
  showBoxText:{
    lineHeight:30,
    height:30,
  },
  hideBox:{
    height:100,
    padding:10,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'row',
    alignItems:'flex-start',
    marginTop:-50,
  },
  hideBoxPart:{
    flex:1,
  },
  hideBoxTitle:{
    lineHeight:30,
    height:30,
    textAlign:'center',
  },
  hideBoxText:{
    color:'#ff6c00',
    textAlign:'center',
    marginTop:5,
    fontSize:15
  },
  hideBoxBar:{
    marginTop:10,
    height:60,
    width:1,
    backgroundColor:'#ddd',
    margin:5,
  },
  hideBoxSmall:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:5
  },
  hideBoxSmallText:{
    fontSize:12,
    color:'#ff6c00',
  }

});

export default connect(state => ({ ...state.reducers }), action)(NumberHome);