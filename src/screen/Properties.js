
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';



export default class PropertiesScreen extends Component {
  static navigationOptions={
    tabBarIcon:({tintColor})=>(
        <Image source={require('../../icon/profile.png')} style={{tintColor: tintColor}}></Image>
    ),
    tabBarColor:'green'
}
  render() {
    return (
    <View style={{alignItems:'center'}}>
        <Text>Propertoes Screen</Text>
    </View>
    );
  }
}