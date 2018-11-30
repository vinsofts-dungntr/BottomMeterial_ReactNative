
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';



export default class StoreScreen extends Component {
    
    static navigationOptions={
        tabBarIcon:({tintColor})=>(
            <Image source={require('../../icon/store.png')} style={{tintColor: tintColor}}></Image>
        ),
        tabBarColor:'black'
    }
  render() {
    return (
      <View style={{alignItems:'center'}}>
          <Text>Store Screen</Text>
      </View>
    );
  }
}