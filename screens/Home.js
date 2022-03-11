import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useEffect} from 'react'

const Home = ({navigation}) => {
    /**
     * navigation est un objet du props envoyé par Apps.js
     * Ce props est récupéré de StackNav dans HomeStack
     */

    // console.log(props); 

    useEffect(() => {
      
      console.log('Home est monté');

        return () => {

          console.log('Home est démonté');
          
        }
    })
    

    const move = () => {
        navigation.navigate('Portfolio')
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Home</Text>
      <Button
          title="Navigate to Portfolio"
          onPress={move}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'lightblue',
        flex:1,
    },
    textScreen: {
      fontSize:50,
    },
}) 