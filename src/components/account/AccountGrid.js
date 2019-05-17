import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,Animated, ScrollView, TouchableOpacity,Image} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/actions';
import Placeholder, { Line, Media } from "rn-placeholder";
import { SafeAreaView } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';

class AccoundGrid extends Component {
  componentWillMount(){

  }

  render() {
    return <View style={styles.container}>
      <View style={styles.grid}>

        <View style={styles.gridViewBox}>
          <Placeholder
          isReady={this.props.isReady}
          animation="fade"

          whenReadyRender={() => <TouchableOpacity style={styles.gridView}>
            <View style={{flex:1}}>
              <Text style={styles.gridText1}>持仓盈亏</Text>
              <Text style={styles.gridText2}>41.90</Text>
            </View>
            <Text style={styles.gridText3}>+0.03</Text>
          </TouchableOpacity>}
          >
              <Line width="100%" height={25}/>
              <Line width="50%" height={15}/>
          </Placeholder>
        </View>

        <View style={styles.gridViewBar}></View>

        
        <View style={styles.gridViewBox}>
          <Placeholder
          isReady={this.props.isReady}
          animation="fade"

          whenReadyRender={() => <TouchableOpacity style={styles.gridView}>
          <View style={{flex:1}}>
            <Text style={styles.gridText1}>小钱袋</Text>
            <Text style={styles.gridText2}>41.90</Text>
          </View>
          <Text style={styles.gridText3}>+0.03</Text>
        </TouchableOpacity>}
          >
              <Line width="100%" height={25}/>
              <Line width="50%" height={15}/>
          </Placeholder>
        </View>

      </View>

      <View style={styles.grid}>

        <View style={styles.gridViewBox}>
          <Placeholder
          isReady={this.props.isReady}
          animation="fade"

          whenReadyRender={() => <TouchableOpacity style={styles.gridView}>
          <View style={{flex:1}}>
            <Text style={styles.gridText1}>单只基金</Text>
            <Text style={styles.gridText2}>1.90</Text>
          </View>
          <Text style={styles.gridText3}></Text>
        </TouchableOpacity>}
          >
              <Line width="100%" height={25}/>
              <Line width="50%" height={15}/>
          </Placeholder>
        </View>
        

        <View style={styles.gridViewBar}></View>


        <View style={styles.gridViewBox}>
          <Placeholder
          isReady={this.props.isReady}
          animation="fade"

          whenReadyRender={() => <TouchableOpacity style={styles.gridView}>
          <View style={{flex:1}}>
            <Text style={styles.gridText1}>组合基金</Text>
            <Text style={styles.gridText2}>41.90</Text>
          </View>
          <Text style={styles.gridText3}></Text>
        </TouchableOpacity>}
          >
              <Line width="100%" height={25}/>
              <Line width="50%" height={15}/>
          </Placeholder>
        </View>
        

      </View>

      <View style={styles.grid}>


        <View style={styles.gridViewBox}>
          <Placeholder
          isReady={this.props.isReady}
          animation="fade"

          whenReadyRender={() => <TouchableOpacity style={styles.gridView}>
          <View style={{flex:1}}>
            <Text style={styles.gridText1}>定投计划</Text>
            <Text style={styles.gridText2}>41.90</Text>
          </View>
          <Text style={styles.gridText3}>+0.03</Text>
        </TouchableOpacity>}
          >
              <Line width="100%" height={25}/>
              <Line width="50%" height={15}/>
          </Placeholder>
        </View>
        

        <View style={styles.gridViewBar}></View>

        <View style={styles.gridViewBox}>
        </View>

      </View>

      <View style={{height:10,backgroundColor:'#eee',marginTop:15}}></View>



</View>

        

        


  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:90,
    backgroundColor:'#fff',
  },
  grid:{
    flexDirection:'row',
  },
  gridViewBox:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
  },
  gridView:{
    flexDirection:'row',
  },
  gridViewBar:{
    width:1,
    height:80,
    backgroundColor:'#eee',
  },
  gridText1:{
    fontSize:16,
  },
  gridText2:{
    fontSize:14,
    color:'#999',
    marginTop:10,
  },
  gridText3:{
    flex:1,
    fontSize:17,
    color:'red',
    textAlign:'right',
  }



});

export default connect(state => ({ ...state.reducers }), action)(AccoundGrid);