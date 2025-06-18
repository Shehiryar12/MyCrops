import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Register(props) {
  return (
    <View>
      <Text style={styles.text}>{props.title}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        fontSize:20,
        // opacity:100,
         marginVertical:85,
    }
})