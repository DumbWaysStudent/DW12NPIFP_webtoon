import RootNavigation from './src/RootNavigation';

import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { createReduxContainer } from 'react-navigation-redux-helpers';
import { store } from './src/redux/store';

const AppNav = createReduxContainer(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.router
});

const AppWithNavigationState = connect(mapStateToProps)(AppNav);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

// import React, { Component } from 'react';
// import { View, Text } from 'react-native';

// import RootNavigation from './src/RootNavigation';

// export default class App extends Component {
//   render() {
//     return <RootNavigation />;
//   }
// }