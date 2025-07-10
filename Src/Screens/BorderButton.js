import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { THEME_COLOR } from './Utils/colors'
import { TUTOR_TITLE } from './Utils/string'

const BorderButton = ({title,onClick}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={onClick}>
                     
                    <Text>{title}</Text> 
        </TouchableOpacity>
    </View>
  )
}

export default BorderButton

const styles = StyleSheet.create({

    btn:{
        width:'90%',
        paddingVertical:20,
        backgroundColor: THEME_COLOR,
        alignSelf:'center',
        borderRadius:10,
    }
})