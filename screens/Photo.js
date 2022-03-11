import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Photo = (props) => {

  console.log(props);
  // Le props récupéré vient de App.js qui hérite de HomeStackNav.js

  const RetourEnArriere = () => {  
    props.navigation.goBack();
  }
  // Bouton pour revenir en arrière

  return (
    <View style={styles.container}>
      <Text>Photo</Text>
      <Button
      title='Retour en arrière'
      onPress={RetourEnArriere}
      />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        flex:1,

    }
})