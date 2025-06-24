import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useNavigationState, useRoute } from '@react-navigation/native'

const ScreenB = () => {
    const navigation=useNavigation()
    const route=useRoute()
    const {name, student, age }=route.params
    // const state=useNavigationState(state=>state.routes.length)
    // console.log(state)
  return (
    <View>
     
      {/* <Button title={"go to screen A"} onPress={()=>{
        navigation.navigate("screenA")}}/> */}
        
         <Button title="go to c" onPress={()=>{
                 navigation.navigate("screenC",{
                   name:"ejaz",
                   student:"ali",
                  
                 }) }}/>


         {/* <Button title="addlength" onPress={()=>{
                 navigation.push("screenA",{
                   name:"ejaz",
                   student:"ali",
                  
                 }) }} */}


           <Button title="To Back" onPress={()=>{
                 navigation.goBack("screenA",{
                   name:"ejaz",
                   student:"ali",
                  
                 }) }}        
      />  

      <Text style={styles.text}>{name}</Text> 
      <Text style={styles.student}>{student}</Text> 

      
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
 
})