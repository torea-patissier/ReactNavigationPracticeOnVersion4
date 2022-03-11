import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Portfolio = () => {
  return (
    <View style={styles.container}>
      <Text>Portfolio</Text>
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