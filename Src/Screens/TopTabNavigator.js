import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Data from './Data'
import Help from './Help'

const Tab=createMaterialTopTabNavigator()
const TopTab= () => {
  return (
    <NavigationContainer>

                <Tab.Navigator>
                    
                    <Tab.Screen name="Data" component={Data}/>
                     <Tab.Screen name="Help" component={Help}/>
              
                </Tab.Navigator>        

    </NavigationContainer>
  )
}

export default TopTab

const styles = StyleSheet.create({})