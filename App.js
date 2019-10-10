import React, { Component } from 'react';
import { View, Text } from 'react-native';

import RootNavigation from './src/RootNavigation';
// import HomeScreen from './src/Page/HomeScreen';

export default class App extends Component {
  render() {
    return <RootNavigation />;
    // return <Search />;
  }
}
