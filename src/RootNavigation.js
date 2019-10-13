import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';
import { Icon, Button } from 'native-base'

import SignIn from './Page/SignIn';
import MainNavigation from './MainNavigation';
import DetailWebtoon from './Page/DetailWebtoon';
import DetailEpisode from './Page/DetailEpisode';
import EditProfile from './Page/EditProfile';
import MyWebtoon from './Page/MyWebtoon';
import EditMyWebtoon from './Page/EditMyWebtoon';
import CreateWebtoon from './Page/CreateWebtoon';

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
    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            header: null,
        }
    },
    MyWebtoon: {
        screen: MyWebtoon,
        navigationOptions: {
            headerTitle: 'My Webtoon'
        }
    },
    EditMyWebtoon: {
        screen: EditMyWebtoon,
        navigationOptions: {
            headerTitle: 'The Secret Of Angel'
        }
    },
    CreateWebtoon: {
        screen: CreateWebtoon,
        navigationOptions: {
            headerTitle: 'Create Webtoon',
            // headerRight: <Button transparent onPress={() => this.props.navigation.navigate('MyWebtoon')}>
            //     <Icon style={{ color: 'orange' }} name='check' type='FontAwesome' size={35} />
            // </Button>,
            // headerRightContainerStyle: {
            //     marginEnd: 15,
            header: null
        },
    }
})

export default createAppContainer(LoginNav);