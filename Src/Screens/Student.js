import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'
import { useNavigation } from '@react-navigation/native'

const Student = () => {

  const Navigation=useNavigation()
  const handleLogin = ()=>{
         Navigation.navigate("LOGIN")
  }

  return (
   

      <View>
                <Image source={require("../Screens/logo.png")}  style={styles.logo}/>
                <Text style={styles.text}>Lorem ipsum dolor.</Text>

              <Text style={styles.one}>Lorem ipsum dolor sit amit, consectutor adispiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore </Text>  

            <View style={styles.buttonContainer}>

              <TouchableOpacity style={styles.loginButtonwrapper} onPress={handleLogin}>
                  <Text style={styles.log}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.Signup}>
                  <Text style={styles.three}>Sign-up</Text>
              </TouchableOpacity>
              
              </View>    
                
      </View>
   
  )
}

export default Student

const styles = StyleSheet.create({

logo:{
 
  marginTop:-10 
  
},
text:{
  textAlign:'center',
  fontSize:33,
  fontFamily:Font.semiBold,
  paddingHorizontal:20,
  color:"black",
  marginTop:-10,
},
one:{
  textAlign:'center',
  fontSize:20,
  fontFamily:Font.medium,
  color:"grey",
  marginVertical:20,
},

buttonContainer: {

  marginVertical:20,
 flexDirection:'row',
  //   justifyContent: 'center',
  // alignItems: 'center',
  borderWidth:2,
  width:"80%",
  marginLeft: 37,
  
  height:60,
  borderRadius:100,
 

},

loginButtonwrapper:{
 
  justifyContent:'center',
  alignItems:'center',
  width:"50%",
  backgroundColor:'black',
  borderRadius:100,

},
Signup:{
  
  justifyContent:'center',
  alignItems:'center',
  width:"50%",
},

three:{
  
  color:"black",
  fontSize:18,
  fontFamily:Font.medium
},

log:{
  color:'white',
  fontFamily:Font.medium,
   fontSize:18,
}

}) 