import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Photo = (props) => {

  console.log(props);
  // Le props récupéré vient de App.js qui hérite de HomeStackNav.js

  const RetourALaPremiereStack = () => {  
    props.navigation.popToTop();
  }
  // Bouton pour revenir à la 1ère stack

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Photo</Text>
      <Button
      title='Retour à la première stack avec popToTop'
      onPress={RetourALaPremiereStack}
      />
    </View>
  )
}

export default Photo

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightpink',
        flex:1,
    },
    textScreen: {
      fontSize:50,
    },
})