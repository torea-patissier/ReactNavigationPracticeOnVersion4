import React from 'react';
import { Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  MaterialIconHeader  from '../components/MaterialMenuIcon';

//Vue principale
const Faq = () => {
  return (
    <View>
      <Text>Faq</Text>
    </View>
  )
}
//Vue principale

//Icone drawer
Faq.navigationOptions = ({navigation}) => {
  console.log(navigation);
  /**
   * Voir {navigation} pour voir d'ou vient l'objet navigation et les méthodes 
   */
  return {

    headerLeft: () => (
      <HeaderButtons
      HeaderButtonComponent = { MaterialIconHeader }
      >
        <Item
        title = 'menu' // Affichera menu si l'icone menu ci-dessous n'est pas chargé
        iconName = "menu"
        onPress={() => navigation.toggleDrawer()}
        /> 
           
      </HeaderButtons>
    ), 

    }
}
//Icone drawer

export default Faq

