import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerScreen from './Src/Screens/DrawerScreen'
import 'react-native-reanimated';

export default function App() {

  return (
    
   <View style={{flex:1}}>
    
     <DrawerScreen/>
   </View>
   

  )
}

const styles = StyleSheet.create({})