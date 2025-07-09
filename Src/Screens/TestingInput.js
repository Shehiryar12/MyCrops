import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const TestingInput = () => {
  return (
    <View style={styles.container}>
      
      <View style={styles.inputBoxContainer}>   
          <Ionicons name={"mail-outline"} size={25}/>  
          {/* <TextInput style={styles.inputBox} placeholder='Enter your name'/>  */}
      </View>


       <View style={styles.inputBoxContainer}>   
          <AntDesign name={"lock"} size={25}/>  
          {/* <TextInput style={styles.inputBox} placeholder='Enter your fathername'/>  */}
           <AntDesign name={"eye"} size={25} />
        </View>

        <View style={styles.inputBoxContainer}>   
          <AntDesign name={"lock"} size={25}/>  
          {/* <TextInput style={styles.inputBox} placeholder='Enter your fathername'/>  */}
           <AntDesign name={"eye"} size={25} />
        </View>
    </View>
  )
}

export default TestingInput

const styles = StyleSheet.create({

 container:{
    flex:1,
    alignItems:'center'
 },

 inputBoxContainer:{
         alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        width:'90%',
        marginVertical:13,
        borderRadius:10,
        paddingLeft:10,
        
 },
    inputBox:{
        backgroundColor:'red',
        flex:1,
    }
})