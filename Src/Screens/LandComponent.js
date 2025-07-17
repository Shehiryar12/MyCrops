import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LandComponent = (props) => {
  return (
    
          <View style={styles.container}>
               <Image source={props.image} style={styles.imagestyle}/>
               <Text style={styles.textcolor} >{props.title}</Text>
          </View>
  
  )
}

export default LandComponent

const styles = StyleSheet.create({

     fullcontainer:{
        alignItems:'center',     
    },

    container:{
        width:326,
        height:170,
        backgroundColor:"#D8DBD8",
        marginTop:40,
        borderRadius:8,
        alignItems:'center', // horizontal
         justifyContent:'center',
         
       
    },
    imagestyle:{
       width:85,
       height:80,           
    },
    textcolor:{
        color:"#777676",
        fontSize:16,
        marginTop:20, 
    },
})