import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexWrap = () => {
  return (
    <View  style={{flexDirection:'row',flexWrap:'wrap-reverse', backgroundColor:'lightgrey' }}>
            <Text style={{ width: 150,  backgroundColor: 'red' , height:100}}>
                   dkdn
            </Text>

            <Text style={{ width: 150, backgroundColor: 'blue' ,height:100}} >
                dlkvn
            </Text>            
             

            <Text style={{ width: 150,  backgroundColor: 'green' ,height:100}} >
                    dlkdngan
            </Text>

            <Text style={{ width: 150,  backgroundColor: 'pink' ,height:100}} >
                    dlkdngan
            </Text>

            <Text style={{ width: 150,  backgroundColor: 'yellow' ,height:100}} >
                    dlkdngan
            </Text>


                           
            </View>
 

    
  )
}

export default FlexWrap

const styles = StyleSheet.create({})