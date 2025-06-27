import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Phone from './Phone';

const Drawer = createDrawerNavigator()
const DrawerScreen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Phone" component={Phone} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({});
