
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TopContainer} from '../Router';


export default class HomeScreen extends Component {
    
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Image source={require('../../icon/home.png')} style={{tintColor: tintColor}}></Image>
        ),
        tabBarColor:'yellow'
    }
  render() {
    return (
    //   <View style={{alignItems:'center'}}>
    //       <Text>HomeScreen</Text>
    //   </View>
    <TopContainer/>
    );
  }
}