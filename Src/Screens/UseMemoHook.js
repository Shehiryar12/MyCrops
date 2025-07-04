import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'

const Use = () => {
    const [count,setCount]=useState(0)
     const [count2,setCount2]=useState(0)

     const calculateValue = x => {
          Alert.alert('calculate running')
          return x*3;
     }
     const calculatedValue= useMemo (()=>calculateValue(count2),[count2])
  return (
    <View>
    

   
      <Text>Counter1: {count}</Text>

   
       <Text >Counter2: {count2}</Text>

       <Text>calculatedValue: {calculatedValue}</Text>

       <Button  title="increment by 1" onPress={ ()=> setCount(count+1)}/>
       <Button  title="increment by 2" onPress={ ()=> setCount2(count2+1)}/>

    </View>
  )
}

export default Use

const styles = StyleSheet.create({})