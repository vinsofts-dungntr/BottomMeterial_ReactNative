
import HomeScreen from './screen/Home';
import PropertiesScreen from './screen/Properties';
import SettingScreen from './screen/Setting';
import StoreScreen from './screen/Store';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import React,{Component} from 'react';

export const BottomTab=createMaterialBottomTabNavigator({
    Home:{screen: HomeScreen},
    Properties:{screen: PropertiesScreen},
    Setting:{screen: SettingScreen},
    Store:{screen: StoreScreen},
},{
    activeTintColor:'red',
    inactiveTintColor:'white',
    barStyle:{backgroundColor:'gray'},
    shifting:true
})

export const Container=createAppContainer(BottomTab);