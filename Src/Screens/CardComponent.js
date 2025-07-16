import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardComponent = (props) => {
  return (
    
         <View style={styles.boxone}>
                    <Image source={props.image} style={styles.imageone}/>               
                    <Text style={{fontSize:9,marginTop:8,}}>{props.title}</Text>
         </View> 
    
  )
}

export default CardComponent

const styles = StyleSheet.create({
   boxone:{
        width:140,
        height:140,
        backgroundColor:'white',
        marginLeft:17,
        marginTop:20,
        elevation:8,
        borderRadius:8,
        alignItems:"center",
        justifyContent:'center',
        borderColor:"#009245A3",
        borderWidth:1,
      
        
    },
    imageone:{
        width:85,
        height:85,
    },
  
})