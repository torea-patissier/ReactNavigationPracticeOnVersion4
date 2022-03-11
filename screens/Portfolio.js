import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Portfolio = ({navigation}) => {

    // console.log(props)

    const GoToPhoto = () => {

        navigation.replace('Photo')
        // Le replace ici permet d'aller au stack suivant et supprimer le stack actuel de la pile
        // Si Home > Portfolio (avec replace) > Photo (Goback)
        // Alors Home > Photo (Goback)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Portfolio</Text>
      <Button
      title='Replace vers photos'
      onPress={GoToPhoto}

      />
    </View>
  )
}

export default Portfolio

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