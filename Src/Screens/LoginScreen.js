import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { Font } from '../Constant/Fonts'
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"

const LoginScreen = () => {

    const[secureEntry,setSecureEntry]=useState(true)

  return (
    <View>

      <TouchableOpacity style={styles.backbutton}>
                         <Ionicons name="arrow-back-outline" style={styles.icon}/>                
      </TouchableOpacity>

      <View style={styles.textContainer}>
                <Text style={styles.headingtext}>Hey,</Text>
                <Text style={styles.headingtext}>Welcome</Text>
                <Text style={styles.headingtext}>Back</Text>


         <View style={styles.formContainer}>
                 <View style={styles.inputContainer} >
                    <Ionicons name={"mail-outline"}  style={styles.iconone}/> 
                      <TextInput style={styles.textinput}
                      
                       placeholder='Enter your email'
                       placeholderTextColor={"grey"}
                    />
                 </View>  

                 <View style={styles.inputContainer} >

                    <SimpleLineIcons name={"lock"}  style={styles.iconone}/> 
                      <TextInput style={styles.textinput}
                      
                       placeholder='Enter your password'
                       placeholderTextColor={"grey"}
                       secureTextEntry={secureEntry}/>

                 
                 <TouchableOpacity
                  onPress={()=>{
                    setSecureEntry(!secureEntry)
                  }}
                 >
                       <SimpleLineIcons name={"eye"}  style={styles.icontwo}/>
                 </TouchableOpacity>   


                 </View> 
                 <TouchableOpacity >
                    <Text style={styles.forgotpasswordtext}>Forgot password?</Text>
                 </TouchableOpacity>

                 <TouchableOpacity style={styles.loginbutton}>
                    <Text style={styles.loginstyle}>Login</Text>
                 </TouchableOpacity>
                 <Text style={styles.simpletext}>or continue with</Text>

                 <TouchableOpacity style={styles.googlebuttoncontainer}>

                    <Image source={require("../Screens/google.png")}
                       style={styles.googleImage}
                    />
                    
                    <Text style={styles.googleText}>Google</Text>

                 </TouchableOpacity>

                 <View style={styles.footerContainer}>
                      <Text style={styles.accountText}>Don't have an account?</Text>
                      <Text  style={styles.signupText}>Sign-up</Text>
                 </View>
         </View>         
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

 icon:{
    fontSize:25,
    padding:7
 },
 backbutton:{
//    height:40 // backgroundColor:'green',
 },

 textContainer:{

    marginVertical:20,
    fontSize:7,
    paddingLeft:12,
 },
 headingtext:{
    fontSize:32,
     fontFamily:Font.semiBold
 },

 formContainer:{
       marginTop:20,
 },
 inputContainer:{
      borderWidth:1,
     marginHorizontal:9,
      borderColor:"grey",
      borderRadius:100,
    //   width:333,
 paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
     
 },
 iconone:{
   fontSize:30,
   color:'grey',
 },
 textinput:{
    flex:1,
    fontFamily:Font.medium,
 },

  icontwo:{
   fontSize:20,
   color:'grey',
 },
 forgotpasswordtext:{
    textAlign:'right',
    fontFamily:Font.semiBold,
    marginHorizontal:14,
    marginVertical:10
 },
 loginbutton:{
           backgroundColor:'black',
           borderRadius:100,
           marginHorizontal:8,
           marginTop:20, 
 },
 loginstyle:{
    color:'white',
    fontSize:18,
    fontFamily:Font.semiBold,
    textAlign:'center',
    padding:10,
    
 },
 simpletext:{
    textAlign:'center',
    marginVertical:20,
    fontSize:14,
    fontFamily:Font.regular
 },
 googleImage:{

    width:16,
    height:18,
 },
 googlebuttoncontainer:{
    flexDirection:"row",
    borderWidth:2,
    borderColor:'grey',
    marginHorizontal:8,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:100,
    padding:10,
 },

 googleText:{
    
    fontSize:20,
    fontFamily:Font.semiBold,
    paddingLeft:5,
    color:"grey",
 },
 footerContainer:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    marginVertical:20,
    gap:5,
 },
 accountText:{
    fontFamily:Font.regular,
 },
 signupText:{
    fontFamily:Font.regular,
 }
})