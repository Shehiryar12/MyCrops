import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { THEME_COLOR } from './Utils/colors'
import { TUTOR_TITLE } from './Utils/string'

const BorderButton = ({title,Click}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={Click}>
                     
                    <Text style={styles.texttitle}>{title}</Text> 
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
    },
    texttitle:{
      alignSelf:'center',
      fontWeight:600,
      fontSize:15,
      color:"white",
    }
})