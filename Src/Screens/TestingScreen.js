import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function TestingScreen() {
  return (
    <View
      style={{
                 flexDirection:"row",
                 justifyContent:"space-evenly",
                 backgroundColor:'red',
                 flex:1,
                 marginVertical:20,
                 
      }}
    >
      <View style ={{backgroundColor:'green',width:100}}>
      <Text >TestingScreen{' '}</Text>

      </View>
      
      <View style = {{backgroundColor:'pink',width: 100}}>
      <Text>fhdjghdf</Text>

      </View>

    </View>

  ) 

   
}

const styles = StyleSheet.create({});
