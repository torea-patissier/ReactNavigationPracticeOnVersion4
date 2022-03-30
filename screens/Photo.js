import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useEffect} from 'react'

const Photo = (props) => {

  // console.log(props);
  // Le props récupéré vient de App.js qui hérite de HomeStackNav.js

  const LancerPopToTop = () => {  
    props.navigation.popToTop();
  }

  // useEffect(() => {

  //   console.log('Photo est monté');

  //     return () => {

  //       console.log('Photo est démonté');
        
  //     }
  // })
  
  Photo.navigationOptions = {

    headerTitle: 'TestHeaderTitle'

  }
  /**
   * Définir la propriété navigationOptions à un composant
   */
  

  
  // Avec pop je retourne (2) stack en arrière donc à Home car Home > Portfolio > Photo

  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Photo</Text>
      <Button
      title='PopTopTop'
      onPress={LancerPopToTop}
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