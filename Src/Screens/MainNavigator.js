import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import Splash from './Splash'
import ChooseUserType from './ChooseUserType'
import Log from './Log'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='ChooseUserType' component={ChooseUserType} options={{ headerShown: false }} />
        <Stack.Screen name='Log' component={Log} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator

const styles = StyleSheet.create({})
