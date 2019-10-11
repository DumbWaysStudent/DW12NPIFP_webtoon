import React from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'native-base'

import HomeScreen from './Page/HomeScreen';
import Favorite from './Page/Favorite';
import Profile from './Page/Profile';

// import Icon from 'react-native-vector-icons/Ionicons';

const MemberNav = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            tabBarLabel: 'For You',

        }
    },
    Favorite: {
        screen: Favorite,
        navigationOptions: {
            tabBarLabel: 'Favorite',
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile'
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#443737',
        inactiveTintColor: '#6C7B95',
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5
        }
    },
})

export default createAppContainer(MemberNav);