import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Font } from '../Constant/Fonts'

export default function Register() {
  return (
    <View>
      <Icon name="chevron-left" size={30} color="black"/>
      <Text style={styles.create}>Create Account</Text>
      <Text style={styles.Sign}>Sign Up</Text>
      <Text style={styles.Name}>Name</Text>
      <TextInput style={styles.input} placeholder='Enter your name' placeholderTextColor={"#DBD8D8"}
      keyboardType='name-phone-pad'/>

      <Text style={styles.FatherName}>Father's Name</Text>
      <TextInput style={styles.finput} placeholder='Enter your father name' placeholderTextColor={"#DBD8D8"}
      keyboardType='name-phone-pad'/>

      
    </View>

  
  )
}

const styles = StyleSheet.create({
   create:{
        fontSize:20,
        textAlign:'center',
        marginTop:35,   
        fontFamily:Font.bold

        
   },

   Sign:{
         color:"green",
         fontSize:17,
        //  marginHorizontal:24,
         marginLeft:15,
         fontFamily:Font.bold            
   },

   Name:{
        color:"#646464",
        marginLeft:15,
        fontSize:18,
        marginTop:18,
        fontFamily:Font.medium  
         
   },

  input:{
    fontSize:14,
    fontFamily:Font.regular,
    borderWidth:1,
    borderRadius:7,
    marginHorizontal:15,
    borderColor:'green',
    color:"black",
    height:54
  },
  FatherName:{
    fontSize:18,
    fontFamily:Font.medium,
    marginLeft:15,
    marginTop:18,
    color:"#646464",

  },
  finput:{
    borderWidth:1,
    marginHorizontal:15,
    borderRadius:7,
    height:54,
    borderColor:'#DBD8D8',
    fontFamily:Font.regular,
     fontSize:14
  }
  

   
})