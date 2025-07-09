import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'
import { useNavigation } from '@react-navigation/native'


const Pageone = () => {

    const navigation=useNavigation();
   const handleLogin = ()=>{
            navigation.navigate("pagingtwo")
   }
   const handleSignup = ()=>{
            navigation.navigate("pagingthree")
   } 
  return (
    <View>
      <Image source={require("../Screens/logo.png")} style={styles.logo}/>
      <Text style={styles.text}> Lorem ipsum dolor.</Text>
<Text style={styles.one}>Lorem ipsum dolor sit amit, consectutor adispiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore </Text>  

           <View style={styles.buttonContainer}>
            
               <TouchableOpacity style={styles.loginButtonWrapper}
                  onPress={handleLogin}
               >
                                       <Text style={styles.loginbuttontext}>Login</Text>
               </TouchableOpacity>

                <TouchableOpacity  onPress={handleSignup}>
                                       <Text  style={styles.signupbuttontext}>Sign-up</Text>
               </TouchableOpacity>
           </View>
              </View>
  )
}

export default Pageone

const styles = StyleSheet.create({

   text:{
        textAlign:'center',
        fontSize:35,
        fontFamily:Font.regular,
        paddingHorizontal:20,   
   },
   one:{
  textAlign:'center',
  fontFamily:Font.medium,
  color:"grey",
//   paddingHorizontal:20,
  fontSize:16,
  marginVertical:20,
},


buttonContainer: {

flexDirection:"row",
borderWidth:2,
width:"80%",
marginLeft:37,
height:60,
borderRadius:100,
},

loginButtonWrapper:{
   justifyContent:'center',
   alignItems:'center',
   width:"50%",
     backgroundColor:'grey',
     borderRadius:98,
},

loginbuttontext:{
  
    color:"white",
    fontFamily:Font.semiBold, 
    fontSize:18,
    
},

signupbuttontext:{
  
     color:"grey",
    fontFamily:Font.semiBold, 
     fontSize:18,
    marginLeft:17,
     marginTop:13,
}
    
})