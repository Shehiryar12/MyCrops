import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerScreen from './Src/Screens/DrawerScreen'
import TopTab from './Src/Screens/TopTabNavigator'


export default function App() {

  return (
    
   <View style={{flex:1}}>
           <TopTab/>
   </View>
   

  )
}

const styles = StyleSheet.create({})