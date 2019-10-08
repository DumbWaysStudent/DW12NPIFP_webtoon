import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import BottomMemberNavigator from '../navigator/BottomMemberNavigator';


const MemberNavigator = createStackNavigator({
    BottomMemberNavigator: {
        screen: BottomMemberNavigator,
        navigationOptions: {
            header: null
        }
    }
})

export default createAppContainer(BottomMemberNavigator);
