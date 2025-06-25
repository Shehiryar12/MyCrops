import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Search from './Search';
import AddPost from './AddPost';
import Home from './Home';
import Favourite from './Favourite';
import { NavigationContainer } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';




const Bottom = createBottomTabNavigator();

const BottomTabScreen = () => {
  
  return (

   
    <NavigationContainer>

       <Bottom.Navigator screenOptions={{
        tabBarActiveTintColor:"green",
       }}>


      <Bottom.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false,
        tabBarIcon: ({size,color})=>{
  
          return <AntDesign name="home" size={24} />
          
        }
                
         }}
      />
    


      <Bottom.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false,
          tabBarIcon:({size,color,})=>{
               return <Feather name="search" size={24} />
          }
         }}
      />

        <Bottom.Screen
        name="AddPost"
        component={AddPost}
       options={{ headerShown: false,
          tabBarIcon:({size,color})=>{
               return <Fontisto name="shopping-basket-add" size={24}/>
          }
         }}
      />

       <Bottom.Screen
        name="Favorite"
        component={Favourite}
        options={{ headerShown: false,  
          
           tabBarIcon:({size,color})=>{
               return <Fontisto name="favorite" size={24}/>
          }
          
         }}
      />

       <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false,

          tabBarIcon:({size,color})=>{
               return <AntDesign name="profile" size={24}/>
          }

          }}
      />
       
       
    
    </Bottom.Navigator>
    </NavigationContainer>

    
  
  );
};

export default BottomTabScreen;

const styles = StyleSheet.create({});
