import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Font } from '../Constant/Fonts'

const AppHeader = () => {
  return (
     <View style={styles.header}>
           <View style={styles.side}>
             <MaterialIcons name="keyboard-arrow-left" size={22} backgroundColor="red" />
           </View>
   
           <Text style={[styles.cropstext, { textAlign: 'center' }]}>Crop To Insure</Text>
   
           <View style={styles.side} />
         </View>
  )
}

export default AppHeader

const styles = StyleSheet.create({
     header: {
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal:10
  },
  side: {
    // width: 40,
    alignItems: 'center',
  },
    cropstext: {
      fontFamily: Font.semiBold,
      fontSize: 15,
    },
})