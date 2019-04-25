import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
        position: 'relative'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text1: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',

    },
})

export default class Welcome extends Component {

    goHome = () => {
        this.props.navigation.navigate('Main');
    }

    componentDidMount() {
        console.log(this.props);
        // setTimeout(()=>{
        //     this.props.navigation.navigate('Main');
        // },2000)
    }

    render() {
        return (
            <Swiper style={styles.wrapper} loop={false}>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <View style={{ height: 100, backgroundColor: 'yellow' }}>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={styles.text1}>And simple</Text>
                    </View>
                    <View style={{ height: 100, justifyContent: 'flex-end', paddingBottom: 50 }}>
                        <Button
                            buttonStyle={{ width: 180 }}
                            titleStyle={{ fontSize: 16 }}
                            onPress={this.goHome}
                            title='进入首页' />
                    </View>

                </View>
            </Swiper>
        );
    }
}

