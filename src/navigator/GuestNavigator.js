import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './../component/SignIn'


const GuestNavigator = createStackNavigator({
    Login: {
        screen: SignIn,
        navigationOptions: {
            header: null,
        }
    },
});

export default createAppContainer(GuestNavigator);
