import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TextComponents = (props) => {
  return (
     <View style={styles.card}>
                  <Image source={props.image} style={styles.imageone}/>
                  <Text style={styles.landtext}>{props.title}</Text>
                  
                  
        </View>
  )
}

export default TextComponents

const styles = StyleSheet.create({

     card:{
        borderWidth:1,
        width:155,
        height:155,
        backgroundColor:'white',
        elevation:6,
        borderRadius:14,
        borderColor:"#009245A3",
        marginLeft:17,
        marginVertical:28,
        alignItems:'center',
        justifyContent:'center',
    },
    imageone:{
        width:85,
        height:85,      
    },

    landtext:{
         fontSize:12,
         marginTop:12,
    }
})