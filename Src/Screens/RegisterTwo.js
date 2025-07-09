import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import CustomTextInputTwo from './CustomTextInputTwo'
import { Font } from '../Constant/Fonts'

const RegisterTwo = () => {
  return (
    <View>
      {/* <Text>RegisterTwo</Text> */}

      <Text style={styles.create}>Create Account</Text>

     <View style={styles.container}>
        <TextInput  placeholder="Enter your  name"   style={{ width:"100%" }} />
    </View>

    <View style={styles.container}>
        <TextInput  placeholder="Enter your father name"   style={{ width:"100%" }} />
    </View>

    <View  style={styles.pass}>
      <CustomTextInputTwo  placeholder="Enter your Password" secureTextEntry={true}/>
    </View>
    
    <View style={styles.pass}>
     < CustomTextInputTwo  placeholder="Enter your confirm password" secureTextEntry={true}/>
     {/* <CustomTextInputTwo placeholder="Enter your father name" /> */}
    </View>
    

    </View>
  )
}

export default RegisterTwo

const styles = StyleSheet.create({

   container: {
    borderWidth: 1,
    marginHorizontal: 12,
    marginVertical: 10,
    borderRadius: 5,
     padding: 5, 
  },

     create:{
          fontSize:20,
          textAlign:'center',
          marginVertical:40,  
        fontFamily:Font.bold,
        color:'green',        
     },
     pass:{

     }
})