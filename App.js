import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Register from './Src/Screens/Register'
import StackNavigator from './Src/Screens/StackNavigator'

export default function App() {

  return (

    <View style = {{flex:1}}>
     <StackNavigator />
    </View>
  )
}

const styles = StyleSheet.create({})