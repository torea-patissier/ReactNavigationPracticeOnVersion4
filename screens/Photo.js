import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Photo = (props) => {

  console.log(props);
  // Le props récupéré vient de App.js qui hérite de HomeStackNav.js

  const popAvecParam = () => {  
    props.navigation.pop(2);
  }
  // Avec pop je retourne (2) stack en arrière donc à Home car Home > Portfolio > Photo

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Photo</Text>
      <Button
      title='Retour à n stack en arrière avec pop'
      onPress={popAvecParam}
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