import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button ,SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import * as action from '../redux/actions';
import PasswordGusture from 'react-native-gesture-password';

class PasswordHandle extends Component {
    constructor() {
        super();
        this.state = {
            status: 'normal',
            message: '请输入密码'
        }
    }

    onEnd = (password) => {
        if (password == '147') {
            this.setState({
                status: 'right',
                message: '密码正确'
            });
            this.props.login_already(true);
            this.props.navigation.navigate('MyIndex');

            // your codes to close this view
        } else {
            this.setState({
                status: 'wrong',
                message: '密码错误。请重新输入'
            });
        }
    }

    onStart = () => {
        this.setState({
            status: 'normal',
            message: '正在输入...'
        });
    }

    onReset = () => {
        this.setState({
            status: 'normal',
            message: 'Please input your password (again).'
        });
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={styles.container}>
                    <PasswordGusture
                        ref='pg'
                        status={this.state.status}
                        message={this.state.message}
                        onStart={this.onStart}
                        onEnd={(password) => this.onEnd(password)}
                        style={{ backgroundColor: '#fff' }}
                        textStyle={{top:40,fontSize:16}}
                        rightColor='#ff6c00'
                        normalColor='#ff6c00'
                        interval={1000}
                        outerCircle={false}
                        innerCircle={true}
                    />
                </View>
                <View style={{ height: 100, flexDirection:'row', justifyContent: 'center', paddingBottom: 30 }}>
                    <Text style={styles.text}>忘记手势密码</Text>
                    <Text style={styles.text1}>|</Text>
                    <Text style={styles.text}>用其他账号登录</Text>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#999',
      justifyContent:'flex-start'
    },
    text: {
      fontSize: 16,
      color: '#999',
      textAlign: 'center',
      
    },
    text1: {
        fontSize: 16,
        color: '#999',
        marginLeft:10,
        marginRight:10
        
      },
  });

export default connect(state => ({ ...state.reducers }), action)(PasswordHandle);


