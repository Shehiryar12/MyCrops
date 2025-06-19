import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'

export default function CustomTextInput(props) {
  return (
    <View>
    <Text style={styles.Name}>{props.title}</Text>
      <TextInput  style={styles.input} placeholder={props.placeholder} placeholderTextColor={"#DBD8D8"} keyboardType={props.keyboardtype}/>
      
      
        
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        fontSize:14,
        fontFamily:Font.regular,
        borderWidth:1,
        borderRadius:7,
        marginHorizontal:15,
        borderColor:'green',
        color:"black",
        height:54,
        marginTop:10,
      },

        Name:{
        color:"#646464",
        marginLeft:15,
        fontSize:18,
        marginTop:18,
        fontFamily:Font.medium  
         
   },
})