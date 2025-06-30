import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Pageone from './Pageone'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pagetwo from './Pagetwo'


const Stack = createNativeStackNavigator();
const School = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown:false}}>
                            <Stack.Screen name={"pagingone"} component={Pageone}/>
                            <Stack.Screen name={"pagingtwo"} component={Pagetwo}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default School

const styles = StyleSheet.create({})