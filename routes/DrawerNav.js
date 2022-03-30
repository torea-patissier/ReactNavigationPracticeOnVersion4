import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import FaqStackNav from './FaqStackNav';
import StackNav from './HomeStackNav';


const RouteConfigs = {

    Home : {
        screen : StackNav
    },
    FAQ : {
        screen : FaqStackNav
    }

}
/**
 * Je récupère StackNav, l'ancienne stack pour l'attribuer à Home, voir pdf 112
 * HomStackNav > DrawerNav > App
 */

/**
 * https://reactnavigation.org/docs/4.x/drawer-based-navigation
 * Documentation officiel 
 */

const TheMainNavigator = createDrawerNavigator(RouteConfigs);
export default createAppContainer(TheMainNavigator);