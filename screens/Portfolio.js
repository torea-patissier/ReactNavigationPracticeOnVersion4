import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useEffect} from 'react'

const Portfolio = ({navigation}) => {

    useEffect(() => {

      console.log('Portfolio est monté');
      
        return () => {

          console.log('Portfolio est démonté');
          
        }
    })
    

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