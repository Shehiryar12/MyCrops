import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ClaimComponent from './ClaimComponent'

const Claims = () => {
  return (
   <View style={styles.fullcontainer} >
  
  <ClaimComponent  title="Tobaccooo" status="Processing" description="Your Claim is processing, you should in touch with use." Date="25 Dec, 2024"
                   contact="Contact Us"/>
    
    </View>
  )
}

export default Claims

const styles = StyleSheet.create({
          fullcontainer:{
       alignItems:'center',
        marginTop:80,
    },
   
   
    
  
})