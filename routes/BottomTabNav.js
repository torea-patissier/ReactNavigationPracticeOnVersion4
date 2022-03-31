import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import Selected from '../screens/Selected';
import StackNav from './HomeStackNav';
import Photo from '../screens/Photo';
import Portfolio from '../screens/Portfolio';
import { tintColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const RouteConfigs = {

    Home: 
    {
        screen : StackNav,
        navigationOptions : 
        {
            tabBarIcon : ({tintColor}) => <MaterialIcons name="home" size={24} color={tintColor} />,
            tabBarLabel : 'Accueil'
            
        }
    },

    /**
     * La fonction donnée { focused: boolean, horizontal: boolean, tintColor: string }renvoie un React.Node,
     *  à afficher dans la barre d'onglets. horizontalest truelorsque l'appareil est en mode paysage et falseen
     *  mode portrait. L'icône est restituée chaque fois que l'orientation de l'appareil change.
     */

    Selected:
    {
        screen : Selected,
        navigationOptions:
        {
            tabBarIcon : ({tintColor}) => <MaterialIcons name="add-a-photo" size={24} color={tintColor} />
        }
    },

    Photo:
    {
        screen : Photo
    },

    Portfolio: 
    {
        screen : Portfolio
    }

}

const TabNavigatorConfig = 
{
    tabBarOptions: 
    {
        activeTintColor: '#e91e63',
        labelStyle: 
        {
          fontSize: 12,
        },

        style: 
        {
          backgroundColor: 'lightgreen',
        },
        inactiveTintColor: 'white',
        
      }

}

/**
 * https://reactnavigation.org/docs/4.x/bottom-tab-navigator/#bottomtabnavigatorconfig
 */

const BottomtabNav = createBottomTabNavigator(RouteConfigs,TabNavigatorConfig);
export default BottomtabNav;