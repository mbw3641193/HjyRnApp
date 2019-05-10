import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, FlatList, ScrollView, Animated } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../redux/actions';

class HotIndex extends Component {
  constructor() {
    super();
    this.state = {
      headerHeight: new Animated.Value(0)
    }
  }



  componentWillMount() {
    // P.S. -1,41区间的映射是告诉interpolate，所有大于41的值都映射成0,所有小于0的值都映射成40,
    // 这样就不会导致Header在上滑的过程中一直向上滑动了
    this.height = this.state.headerHeight.interpolate({
      inputRange: [-1,0, 70,71],
      outputRange: [70,70, 0,0]
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
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <Animated.View style={[styles.headerBottom, { height: this.height }]}>
        <Text style={styles.headerBottomText}>123</Text>
      </Animated.View>
      <Animated.ScrollView style={{ opca: this.top }} onScroll={this.animatedEvent} scrollEventThrottle={16}>
        <Button title='跳转到详情页1' onPress={() => {
          this.props.navigation.navigate('Detail', {
            isLogin: this.props.isLogin,
          })
        }} />
        <Button title='reset' onPress={() => {
          this.props.firstTimeOut();
        }} />
        <Text style={styles.welcome}>1</Text>
        <Text style={styles.welcome}>2</Text>
        <Text style={styles.welcome}>3</Text>
        <Text style={styles.welcome}>4</Text>
        <Text style={styles.welcome}>5</Text>
        <Text style={styles.welcome}>6</Text>
        <Text style={styles.welcome}>7</Text>
        <Text style={styles.welcome}>8</Text>

        {/* <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        /> */}
      </Animated.ScrollView>
    </View>
  }
}

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
    backgroundColor: '#ff6c00',
    overflow: 'hidden',
  },
  headerBottomText: {
    textAlign: 'center',
    lineHeight: 40,

  }
});

export default connect(state => ({ ...state.reducers }), action)(HotIndex);