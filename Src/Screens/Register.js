import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Register() {
  return (
    <View>
       <Icon name="chevron-left" size={30} color="black"/>
      <Text style={styles.create}>Create account</Text>
      <Text style={styles.Sign}>Sign Up</Text>


    </View>
  )
}

const styles = StyleSheet.create({
   create:{
        fontSize:20,
         textAlign:'center',
        // marginVertical:89,
        
        
   },

   Sign:{
         color:"green",
         fontSize:18,
        //  marginHorizontal:24,
         
        
         
   }
})