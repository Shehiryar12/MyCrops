import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SELECT_USER } from './Utils/string'

const ChooseUserType = () => {
  return (
    <View style={styles.container}>
  

      <Image source={require('../Screens/client.jpg')} style={styles.client}/>
      <Text style={styles.heading}>{SELECT_USER}</Text>
    </View>
  )
}

export default ChooseUserType

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"BG_COLOR",
  },
  client:{
    width:'100%',
    height:'25%',
  },
  heading:{
    fontSize:18,
    textAlign:'center',
    fontWeight:600,
  }
})