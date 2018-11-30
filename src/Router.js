
import HomeScreen from './screen/Home';
import PropertiesScreen from './screen/Properties';
import SettingScreen from './screen/Setting';
import StoreScreen from './screen/Store';
import TopScreen1 from './screen/Top1';
import TopScreen2 from './screen/Top2';
import TopScreen3 from './screen/Tab3';
import TopScreen4 from './screen/Tab4';

import {createMaterialBottomTabNavigator, } from 'react-navigation-material-bottom-tabs';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import React,{Component} from 'react';
import {Dimensions} from 'react-native';

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
});

var {height, width}=Dimensions.get('window')

export const TopTab=createMaterialTopTabNavigator({
    Tab1: TopScreen1,
    Tab2: TopScreen2,
    Tab3: TopScreen3,
    tAB4: TopScreen4 
},{
    swipeEnabled: true,
    tabBarPosition:'top',
    tabBarOptions:{
        scrollEnabled: true,
        tabStyle:{width:width*0.5-width*0.22,}
    },
    
});


export const TopContainer=createAppContainer(TopTab);

export const Container=createAppContainer(BottomTab);