import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import About from './Student';
import Pageone from './Student';
import Student from './Student';
import LoginScreen from './LoginScreen';
import Signup from '../Signup';


const Stack=createNativeStackNavigator();
const Login = () => {

    
  return (


    <NavigationContainer>

                       <Stack.Navigator screenOptions={{
                        headerShown: false,
                       }}>
                                         <Stack.Screen 
                                         name={"Form"} component={Student}/>

                                          
                       </Stack.Navigator>
                        
    </NavigationContainer>
   
  )
}

export default Login

const styles = StyleSheet.create({})