import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import GuestNavigator from '../navigator/GuestNavigator';
import MemberNavigator from '../navigator/MemberNavigator';


const RootNavigator = createStackNavigator({
    GuestNavigator,
    MemberNavigator
})

export default createAppContainer(RootNavigator);
