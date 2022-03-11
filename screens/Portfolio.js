import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Portfolio = ({navigation}) => {

    // console.log(props)

    const GoToPhoto = () => {

        navigation.navigate('Photo')
    }

  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
      <Button
      title='Aller vers photos'
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
        backgroundColor:'green',
        flex:1,
    }
})