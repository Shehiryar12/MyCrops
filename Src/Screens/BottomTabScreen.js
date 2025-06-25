import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Search from './Search';
import AddPost from './AddPost';
import Home from './Home';
import Favourite from './Favourite';
import { NavigationContainer } from '@react-navigation/native';

const Bottom = createBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <NavigationContainer>
       <Bottom.Navigator>
      <Bottom.Screen
        name="Home"
        component={Home}
        option={{ headerShown: false }}
      />

      <Bottom.Screen
        name="Search"
        component={Search}
        option={{ headerShown: false }}
      />

        <Bottom.Screen
        name="AddPost"
        component={AddPost}
        option={{ headerShown: false }}
      />

       <Bottom.Screen
        name="Favorite"
        component={Favourite}
        option={{ headerShown: false }}
      />

       <Bottom.Screen
        name="Profile"
        component={Profile}
        option={{ headerShown: false }}
      />
       
       
    
    </Bottom.Navigator>
    </NavigationContainer>

    
    
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
