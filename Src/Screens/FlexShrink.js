import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlexShrink = () => {
  return (
    <View style={{ flexDirection: 'row', width: 200 }}>
  <View style={{ width: 150, flexShrink:1, backgroundColor: 'red' }} />
  <View style={{ width: 150, backgroundColor: 'blue' }} />

  <Text>fdk</Text>
</View>


  )
}

export default FlexShrink

const styles = StyleSheet.create({})