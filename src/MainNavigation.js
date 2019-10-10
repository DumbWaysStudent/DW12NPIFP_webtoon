import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './Page/HomeScreen'

const MemberNav = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    }
})

export default createAppContainer(MemberNav);