import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRefTwo = () => {
    const [count,setCount]=useState(0)
 const [previousCount,setpreviousCount]=useState(0)
 const previousRef=useRef(0)
 const inputref=useRef()
    useEffect(()=>{

        // setpreviousCount(count)
        previousRef.current=count

    },[count])
  return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>

      <Text>{count}</Text>

       <Text>{`current count: ${count}`}</Text>
       {/* <Text>{`previous count: ${previousCount}`}</Text> */}

       <Text>{`previous count: ${previousRef.current}`}</Text>


       <Text onPress={()=>setCount(count + 5)}>hello</Text>

        <TextInput 
        ref={inputref}
        style={{width:"70%",borderWidth:1,}}/> 

        <TextInput 
        ref={inputref}
        style={{width:"70%",borderWidth:1,marginVertical:15}}/> 

        <Button title="focus" onPress={() => {
            inputref.current.focus()
        }}/>
   
    
      
    </View>

  )
}

export default UseRefTwo

const styles = StyleSheet.create({})