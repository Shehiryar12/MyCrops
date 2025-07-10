import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { TEXT_COLOR, THEME_COLOR } from './Utils/colors'
import { SPLASH_TAGLINE } from './Utils/string'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {

  const navigation=useNavigation();

  useEffect(()=>{
 setTimeout(()=>{
                navigation.navigate("ChooseUserType")
 },2000)
  },[])
  return (
    <View style={styles.container}>
      <Image source={require('../Screens/apple.png')} style={styles.logo}/>
      <Text style={styles.tagLine}>{SPLASH_TAGLINE}</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor:THEME_COLOR,
    alignItems:'center'
  },

  logo:{
    width:'60%',
    height:'200', 
  },
  tagLine:{
    color:TEXT_COLOR,
    fontWeight:600,
    marginVertical:8,
    fontSize:14
  }


})