import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'

export default function MyButton(props) {
  return (
 
     
      <TouchableOpacity title="Sign up" style={styles.button}>
                <Text style={styles.text} fontSize="22">Sign up</Text> 
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    text:{
         marginTop:18,
          fontSize:18,
          textAlign:"center",
          fontSize:16,
          fontFamily:Font.semiBold,
          color:"#FFFFFF",
      },
      button:{
         marginTop:60,
        backgroundColor:"#009245",
        height:57,
        borderRadius:7,
        marginHorizontal:15,
        marginBottom:110,
      }
      
}) 