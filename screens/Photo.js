import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Photo = () => {
  return (
    <View style={styles.container}>
      <Text>Photo</Text>
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