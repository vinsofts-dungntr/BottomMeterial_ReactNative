
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class SettingScreen extends Component {
  static navigationOptions={
    tabBarIcon:({tintColor})=>(
        <Image source={require('../../icon/settings.png')} style={{tintColor: tintColor}}></Image>
    ),
    tabBarColor:'gray'
}
  render() {
    return (
    <View style={{alignItems:'center'}}>
        <Text>Setting Screen</Text>
    </View>
    );
  }
}