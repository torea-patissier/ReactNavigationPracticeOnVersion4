import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialIcons } from '@expo/vector-icons';
import Color from '../styles/Color';


const MaterialIconHeader = (props) => (

    <HeaderButton
    IconComponent={MaterialIcons}
    iconSize={23}
    {...props}
    // color={Color.white}
    />

);

export default MaterialIconHeader;