import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../styles/Color';


const MaterialIconHeader = (props) => (

    <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={30}
    {...props}
    />

);
/**
 * https://github.com/vonovak/react-navigation-header-buttons
 * 
 * Documentation
 * 
 *  https://icons.expo.fyi/
 * 
 * Les différents icones 
 * 
 * "react-navigation-header-buttons": "^6.3.1", == à installer via terminal
 * 
 */
export default MaterialIconHeader;