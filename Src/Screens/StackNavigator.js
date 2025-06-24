import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenC from './ScreenC';


const stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='screenA'>
        <stack.Screen
          name="screenA"
          component={ScreenA}
          options={{ title: 'screen A',
            headerShown:false,
            headerStyle:{
              backgroundColor:'orange'
            }
           }}
        />

        <stack.Screen
          name="screenB"
          component={ScreenB}
          options={{ title: 'screen B' }}
        />

        <stack.Screen
          name="screenC"
          component={ScreenC}
          options={{ title: 'screen C' }}
        />
         

      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
