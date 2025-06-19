import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Font } from '../Constant/Fonts'

export default function Register() {
  return (
    <View>
      <Icon name="chevron-left" size={30} color="black"/>
      <Text style={styles.create}>Create Account</Text>
      <Text style={styles.Sign}>Sign Up</Text>

      


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
         fontSize:20,
        //  marginHorizontal:24,
         marginLeft:15,
         
        
         
   }
})