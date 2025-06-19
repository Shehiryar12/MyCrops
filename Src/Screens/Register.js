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
      <TextInput style={styles.input} placeholder='Enter your name' placeholderTextColor={"#DBD8D8"} />

   

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
        marginTop:20,
        fontFamily:Font.medium  
         
   },

  // holder:{

  //   borderRadius:5,
  //   borderWidth:2,
  //   marginLeft:15,
  //   marginRight:15,
  //   height:54,
  //   // color:"#DBD8D8",
  //   borderSize:1,
    
  // }
  input:{
    fontSize:14,
    fontFamily:Font.regular,
    borderWidth:1,
    borderRadius:7,
    marginHorizontal:15,
    borderColor:'green',
    color:"black",
    height:54
    
 
  }
  

   
})