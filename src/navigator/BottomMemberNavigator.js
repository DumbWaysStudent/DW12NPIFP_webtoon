import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeUser from '../component/homescreen/HomeUser';
import Favorite from '../component/homescreen/Favorite';
import Profile from '../component/homescreen/Profile';


const BottomMemberNavigator = createBottomTabNavigator({
    HomeUser: {
        screen: HomeUser,
    },
    Favorite: {
        screen: Favorite,
    },
    Profile: {
        screen: Profile,
    }
});

export default createAppContainer(BottomMemberNavigator);
