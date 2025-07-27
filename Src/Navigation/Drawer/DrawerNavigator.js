import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import About from './About';
import Data from '../../Screens/Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const Drawer = createDrawerNavigator();

const Screen = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false ,drawerActiveBackgroundColor:"#f2f2f2",color:'black'}}>
        <Drawer.Screen name="MyClaims" component={Home}  options={{ drawerIcon:({})=>{
          return <MaterialIcons name="assignment" size={20} color={"green"}/>
        }}}/>
        <Drawer.Screen name="My Purchase" component={Settings} options={{ drawerIcon:({})=>{
          return <MaterialIcons name="add-shopping-cart" size={20} color={"green"}/>
        }}}/>
        <Drawer.Screen name="Terms & condition" component={About} options={{ drawerIcon:({})=>{
          return <MaterialIcons name="content-paste" size={20} color={"green"}/>
        }}}/>
        <Drawer.Screen name="About us" component={Data} options={{ drawerIcon:({})=>{
          return <Octicons name="database" size={20} color={"green"}/>
        }}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Screen;
