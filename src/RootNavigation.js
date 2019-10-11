import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';
import { Icon } from 'native-base'

import SignIn from './Page/SignIn';
import MainNavigation from './MainNavigation';
import DetailWebtoon from './Page/DetailWebtoon';
import DetailEpisode from './Page/DetailEpisode';

const LoginNav = createStackNavigator({
    login: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        }
    },
    MainNavigation: {
        screen: MainNavigation,
        navigationOptions: {
            header: null,
        }
    },
    DetailWebtoon: {
        screen: DetailWebtoon,
        navigationOptions: {
            headerTitle: 'The Secret of Angel',
            headerRight: <Icon name="share" size={35} />,
            headerRightContainerStyle: {
                marginEnd: 15,
            },
        }
    },
    DetailEpisode: {
        screen: DetailEpisode,
        navigationOptions: {
            headerTitle: 'Episode 1',
            headerRight: <Icon name="share" size={35} />,
            headerRightContainerStyle: {
                marginEnd: 15,
            },
        }
    },
})

export default createAppContainer(LoginNav);