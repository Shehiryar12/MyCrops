import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Font } from '../Constant/Fonts';

const Pagetwo = () => {
  return (
    <View>

     <TouchableOpacity  style={styles.backbuttonwrapper}>
      <Ionicons name={"arrow-back"} style={styles.arrows}/>

     </TouchableOpacity>

    <View style={styles.textcontainer}>
        <Text style={styles.handlingtext}>Hey,</Text>
        <Text style={styles.handlingtext}>Welcome</Text>
        <Text style={styles.handlingtext}>Back</Text>
    </View>


     <View style={styles.formContainer}>

          <View style={styles.inputcontainer}>
            <Ionicons name={"mail-outline"} size={30}/>
            <TextInput style={styles.textInput} placeholder='Enter your email'/>
          </View>

           <View style={styles.inputcontainer}>
            
           
            <SimpleLineIcons name={"lock"}  size={30} marginHorizontal={7}/>
            <TextInput style={styles.textInput} placeholder='Enter your password' secureTextEntry={true}/>
             <SimpleLineIcons name={"eye"}  size={30} marginHorizontal={7}/>
          </View>
        
    </View>

    </View>
  )
}

export default Pagetwo

const styles = StyleSheet.create({

arrows:{
    fontSize:30,
    marginLeft:15
}  ,
handlingtext:{
    fontSize:32,
     marginLeft:15,
     fontFamily:Font.regular
} , 

inputcontainer:{

    borderWidth:1,
    marginHorizontal:17,
    borderRadius:100,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:14,
    marginVertical:20,
     
},

textInput:{
    flex:1,
    paddingHorizontal:20, 
    fontFamily:Font.regular ,
    padding:10,
    marginVertical:4,
},



})