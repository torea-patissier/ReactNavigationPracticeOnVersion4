import { createStackNavigator } from 'react-navigation-stack';
import Faq from '../screens/Faq';
import Color from '../styles/Color';

const screens =  {

    Faq:
    {
    screen : Faq,
        navigationOptions : {
            title: 'F.A.Q',
        }
        /**
         * NavigationOptions permet d'ajouter des options au header et de le styliser
         * Rajouter un titre, ajouter une couleur etc
         * https://reactnavigation.org/docs/4.x/headers
         * 
         */ 
        
    },
}

const HeaderParDefaut = {

    //Propriété react navigation
    defaultNavigationOptions: {

        headerStyle: {
            backgroundColor: Color.salmon,
          },

        headerTintColor: Color.white,

        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25
        },
    }
}
/**
 * Permet de définir un entête par défaut qui avec un style 
 * qui sera répété dans chaque page, sans avoir besoin
 * de copier/coller le style 
 * https://reactnavigation.org/docs/4.x/headers
 * 
 * 
 */

const FaqStackNav = createStackNavigator(screens, HeaderParDefaut)

export default FaqStackNav;