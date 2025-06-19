import { StyleSheet, Text, View,TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Font } from '../Constant/Fonts'
import CustomTextInput from '../Components/CustomTextInput'

export default function Register() {
  return (
    <View>

<ScrollView>
      <Icon name="chevron-left" size={30} color="black"/>
      <Text style={styles.create}>Create Account</Text>
      <Text style={styles.Sign}>Sign Up</Text>

      <CustomTextInput placeholder="Enter your name" title="Name"/>
      <CustomTextInput placeholder="Enter your Father Name" title="Father Name"/>
      <CustomTextInput placeholder="Enter your CNIC" title="CNIC" keyboardtype={"phone-pad"}/>
      <CustomTextInput placeholder="Enter your email" title="Email" keyboardtype={"email-address"}/>
      <CustomTextInput placeholder="Enter your Phone number" title="phone Number" keyboardtype={"phone-pad"}/>
      <CustomTextInput placeholder="Your DOB" title="DOB" keyboardtype={"phone-pad"}/>
      <CustomTextInput placeholder="Enter your Password" title="Password" secureTextEntry={true}/>
      <CustomTextInput placeholder="Confirm your Password" title="Confirm your password" secureTextEntry={true}/>

      
</ScrollView>



     
      
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
  },

  Cnic:{
    marginLeft:15,
    marginTop:18,
    fontSize:18,
    fontFamily:Font.medium,
    color:"#646464",
  }
  

   
})