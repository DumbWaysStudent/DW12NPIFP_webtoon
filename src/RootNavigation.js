import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './Page/SignIn';
import MainNavigation from './MainNavigation'

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
    }
})

export default createAppContainer(LoginNav);