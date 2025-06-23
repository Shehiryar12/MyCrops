import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ScreenB = () => {
    const navigation=useNavigation()
  return (
    <View>
     
      <Button title={"go to screen A"} onPress={()=>{
        navigation.navigate("screenA")}}/>
      
    </View>
  )
}

export default ScreenB

const styles = StyleSheet.create({})