import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='screenA'>
        <stack.Screen
          name="screenA"
          component={ScreenA}
          options={{ title: 'screen A' }}
        />

        <stack.Screen
          name="screenB"
          component={ScreenB}
          options={{ title: 'screen B' }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
