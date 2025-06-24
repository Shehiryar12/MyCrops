import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScreenA = () => {

    const navigation=useNavigation()
  return (
    <View>
      <Text style = {{color:'red'}}>ScreenA</Text>
      <Button title={"Press"} onPress={()=>{
        navigation.navigate("screenB",{
          name:"ejaz",
          student:"ali",
        },
        
        ) }}
      />

       {/* <Button title={"go to screen A"} onPress={()=>{
        navigation.navigate("screenA")
       }}/> */}

       
    </View>
  )
}

export default ScreenA

const styles = StyleSheet.create({})