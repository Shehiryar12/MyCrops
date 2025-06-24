import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const ScreenB = () => {
    const navigation=useNavigation()
    const route=useRoute()
    const {name, student, age }=route.params
  return (
    <View>
     
      {/* <Button title={"go to screen A"} onPress={()=>{
        navigation.navigate("screenA")}}/> */}

      <Button title={"Govhgvhg "} 
         onPress={()=>{
        navigation.goBack()
      }}/>  

      <Text style={styles.text}>{name}</Text> 
      <Text style={styles.student}>{student}</Text> 
      <Text style={styles.age}>{age}</Text> 

      
    </View>
  )
}

export default ScreenB

const styles = StyleSheet.create({
  text:{
           backgroundColor:'red'
  },
  student:{
       backgroundColor:'green',
  },
  age:{
    backgroundColor:'blue'
  }
})