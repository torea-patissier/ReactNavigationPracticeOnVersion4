import { StyleSheet } from 'react-native'
import Color from './Color'

export const globalStyle = StyleSheet.create({
    container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center',
    },
    titleText: {
         fontSize:20,
         padding:9,
    },
    imgStyle:{
        height:300,
        width:300,
        borderRadius:5,
        marginTop:5,
    },
    descHome: {
        margin:20,
    }
}) 