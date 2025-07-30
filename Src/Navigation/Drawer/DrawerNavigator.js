import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import About from './About';
import Data from '../../Screens/Data';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Newsscreen from './Newscreen';
import Newscreen from './Newscreen';




const Drawer = createDrawerNavigator();

const Screen = () => {
  return (

    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false,drawerActiveBackgroundColor:'white',drawerActiveTintColor:"black",drawerInactiveTintColor:"white", drawerStyle:{
        backgroundColor:'red'}}}>
        <Drawer.Screen name="MyClaims" component={Home} options={{ drawerIcon:({})=>{
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

        {/* <Drawer.Screen name="News" component={Newsscreen} options={{ 
  drawerIcon: ({}) => <MaterialIcons name="newspaper" size={20} color="green" /> 
}}/> */}

      </Drawer.Navigator>
    </NavigationContainer>
  

   
  );
};

export default Screen;

