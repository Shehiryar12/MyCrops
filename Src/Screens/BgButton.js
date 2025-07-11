import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BG_COLOR, THEME_COLOR } from './Utils/colors'
import { TUTOR_TITLE } from './Utils/string'

const BgButton = ({title,Click}) => {
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={Click}>
                     
                    <Text style={styles.texttitle}>{title}</Text> 
        </TouchableOpacity>
    </View>
  )
}

export default BgButton

const styles = StyleSheet.create({

    btn:{
        width:'90%',
        paddingVertical:20,
        backgroundColor: BG_COLOR,
        alignSelf:'center',
        borderRadius:10,
        marginVertical:10,
        borderWidth:1,

    },
    texttitle:{
      alignSelf:'center',
      fontWeight:600,
      fontSize:15,
      color:"orange",
    }
})