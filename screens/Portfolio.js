import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import  MaterialIconHeader  from '../components/MaterialMenuIcon';

const Portfolio = ({navigation}) => {

    // useEffect(() => {

    //   console.log('Portfolio est monté');
      
    //     return () => {

    //       console.log('Portfolio est démonté');
          
    //     }
    // })
    

    const GoToPhoto = () => {

        navigation.navigate('Photo')

    }

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>{navigation.getParam('name')}</Text>
      <Text style={styles.textScreen}>{navigation.getParam('totalImg')}</Text>
      {/* 
      navigation est un objet qui contient la methode js getParam
      on récupère le param name du tableau DATA dans Home.js
      */}
      <Button
      title='Navigate vers photos'
      onPress={GoToPhoto}
      />
    </View>
  )
}

Portfolio.navigationOptions = (navData) => {

  // console.log(navData);
  const name = navData.navigation.getParam('name');
  const favColor = navData.navigation.getParam('favColor');

  return {
    // HeaderTitle: 'MonProfil',
    headerTitle: `Profil de ${name}`,
    headerStyle:{ backgroundColor : `${favColor}`},
    headerRight: () => (
      <HeaderButtons
      HeaderButtonComponent = { MaterialIconHeader }
      >

        <Item
        title = 'menu' // Affichera menu si l'icone menu ci-dessous n'est pas chargé
        iconName = "menu"
        onPress={() => alert('Portfolio de ' + name)}
        /> 
           
      </HeaderButtons>
    ), 
 
    /**
     * headerRight permet d'ajouter un bouton en haut à droite du header
     */
  }

}

export default Portfolio

//CSS
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightgreen',
        flex:1,
    },
    textScreen: {
      fontSize:50,
    },
})