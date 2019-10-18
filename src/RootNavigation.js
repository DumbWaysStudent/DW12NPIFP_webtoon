import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderStyleInterpolator } from 'react-navigation-stack';
import { Icon, Button } from 'native-base'

import SplashScreen from './Page/SplashScreen';
import SignIn from './Page/SignIn';
import SignUp from './Page/SignUp';
import MainNavigation from './MainNavigation';
import DetailWebtoon from './Page/DetailWebtoon';
import DetailEpisode from './Page/DetailEpisode';
import EditProfile from './Page/EditProfile';
import MyWebtoon from './Page/MyWebtoon';
import CreateWebtoon from './Page/CreateWebtoon';
import CreateEpisode from './Page/CreateEpisode';
import EditMyWebtoon from './Page/EditMyWebtoon';
import EditEpisode from './Page/EditEpisode';

const LoginNav = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: {
            header: null,
        }
    },
    login: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        }
    },
    signup: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        }
    },
    MainNavigation: {
        screen: MainNavigation,
        navigationOptions: {
            header: null,
            gesturesEnabled: false,
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
            header: null
        }
    },
    CreateWebtoon: {
        screen: CreateWebtoon,
        navigationOptions: {
            header: null
        },
    },
    CreateEpisode: {
        screen: CreateEpisode,
        navigationOptions: {
            header: null
        },
    },
    EditEpisode: {
        screen: EditEpisode,
        navigationOptions: {
            header: null
        },
    }
})
const onShare = async () => {
    try {
        const result = await Share.share({
            message: 'Aplikasi Webtoon Ardi ini',
        });
        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                Alert.alert('1');
            } else {
                Alert.alert('2');
            }
        } else if (result.action === Share.dismissedAction) {
            Alert.alert('3');
        }
    } catch (error) {
        Alert.alert(error.message);
    }
};

export default createAppContainer(LoginNav);