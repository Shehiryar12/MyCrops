import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Use = () => {
  const [count,setCount]=useState(5);
  useEffect(()=>{
    console.log("hey");
    
  },[count])
  return (
    <View>
      <Text>UseEffect</Text>
      <Text style={styles.count}>Current Count: {count}</Text>
      <Button title="update count" onPress={()=>setCount(count + 2)}/>
    </View>
  )
}

export default Use

const styles = StyleSheet.create({})