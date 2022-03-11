import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Photo from '../screens/Photo';
import Portfolio from '../screens/Portfolio';

const screens =  {

    Home:
    {
    screen : Home
    },

    Photo:
    {
    screen : Photo
    },

    Portfolio:
    {
    screen : Portfolio
    },


}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)