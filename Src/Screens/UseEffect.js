import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect= () => {

   const [count,setCount]=useState("")
  useEffect(()=>{
    console.log("Hello")
  })
  
  return (

    <View>
      <Text style={styles.text}>program</Text> 
      <Button title="Update Count" onPress={()=>setCount()}/>
    </View>

  )
}

export default UseEffect

const styles = StyleSheet.create({
  text:{
    fontSize:20,
  }
})