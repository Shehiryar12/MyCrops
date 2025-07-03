// import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'

// const UseRefHook = () => {
//   const [count,setCount]=useState(0)
//   const [previouscount,setpreviousCount]=useState(null)
//   const prevRef=useRef(0)

//    useEffect(()=>{
//     prevRef.current=count
//    },[count])

//   return (
//     <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//       <Text style={{fontSize:20}}>{`current count:${count}`}</Text>
//       <Text style={{fontSize:20}}>{`previous count:${prevRef.current}`}</Text>


//         <Text style={{fontSize:20}}
//          onPress={ () => { setCount(count + 1);}}>increase count
//         </Text>
//     </View>
//   )
// }

// export default UseRefHook

// const styles = StyleSheet.create({})

import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {

  const[count,setCount]=useState(0)
  const[previouscount,setPrevoiusCount]=useState(null)

  const previousRef=useRef(0)
   const inputRef=useRef(null)  
   useEffect(()=>{
    previousRef.current = count
   }, [count] )

   
 
  return (
    <View style={{flex:1,justifyContent:'center',  alignItems:'center'}}> 
       <Text style={{fontSize:20}}>{`current count:${count}`}</Text>
       <Text style={{fontSize:20}}>{`previous count:${previousRef.current}`}</Text>

      <Text 
      style={{fontSize:20}} 
      onPress={() => {setCount(count + 1)}} >
      add value</Text>

      <TextInput style={{width:'90%', borderWidth:1, marginVertical:5}} ref={inputRef}/>

            <TextInput style={{width:'90%', borderWidth:1,  marginVertical:10}} ref={inputRef}/>
 

      
      <Button onPress={ () => 
        {inputRef.current.focus()
        }}     title='focus input'/>

            </View>
  )
}

export default UseRefHook

const styles = StyleSheet.create({})