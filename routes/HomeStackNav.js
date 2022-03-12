import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Photo from '../screens/Photo';
import Portfolio from '../screens/Portfolio';
import Color from '../styles/Color'

const screens =  {

    Home:
    {
    screen : Home,
        navigationOptions : {
            title: 'Accueil',
            headerStyle: { backgroundColor: Color.salmon }
        }
        /**
         * NavigationOptions permet d'ajouter des options au header et de le styliser
         * Rajouter un titre, ajouter une couleur etc
         * https://reactnavigation.org/docs/4.x/headers
         */
    },

    Photo:
    {
    screen : Photo,
        navigationOptions : {
            title: 'Ecran photo',
            headerStyle: { backgroundColor: Color.grey }
        }

    },

    Portfolio:
    {
    screen : Portfolio
    },


}

const StackNav = createStackNavigator(screens)

export default createAppContainer(StackNav)