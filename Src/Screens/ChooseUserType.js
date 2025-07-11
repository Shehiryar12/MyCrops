import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BG_COLOR, WHITE } from './Utils/colors'

import BorderButton from './BorderButton'
import { LEARNER_TITLE, SELECT_USER, TUTOR_TITLE } from './Utils/string'
import BgButton from './BgButton'
import { useNavigation } from '@react-navigation/native'

const ChooseUserType = () => {
  const navigation=useNavigation();
  return (
    <View style={styles.container}>

      <Image source={require('../Screens/client.jpg')} style={styles.client}/>

      <Text style={styles.heading}>{SELECT_USER}</Text>

       <BorderButton title={TUTOR_TITLE} Click={() => {
        // console.log("Button Pressed")
  navigation.navigate("Log")
}} />

      
        <BgButton title={LEARNER_TITLE} />
     
    </View>
    
  )
}

export default ChooseUserType

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: BG_COLOR,
  },
  client:{
    width:'100%',
    height:'25%',
  },
  heading:{
    fontSize:18,
    textAlign:'center',
    // fontWeight: '600',
    marginVertical:13,
  }
})
