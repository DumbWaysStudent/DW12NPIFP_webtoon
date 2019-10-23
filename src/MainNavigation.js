import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { Icon } from 'native-base'

import HomeScreen from './Page/HomeScreen';
import Favorite from './Page/Favorite';
import Profile from './Page/Profile';

import Icon from 'react-native-vector-icons/Ionicons';

const MemberNav = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'For You',
            tabBarIcon: ({ tintColor }) => (<Icon name="md-apps" color={tintColor} size={24} />)

        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarIcon: ({ tintColor }) => (<Icon name="md-star" color={tintColor} size={24} />)
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => (<Icon name="md-person" color={tintColor} size={24} />)
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#003a21',
        style: {
            backgroundColor: '#01CB75',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }
    },
})

export default createAppContainer(MemberNav);