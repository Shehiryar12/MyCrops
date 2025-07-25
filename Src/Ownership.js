import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Font } from './Constant/Fonts'

const Ownership = () => {
  return (
    <View style={styles.container}>
      
    <View style={styles.heading}> 
      <MaterialIcons name="keyboard-arrow-left" size={27} style={styles.arrowstyling}/>
      {/* <Text style={styles.LandStyling}>Land Area Ownership</Text> */}
    </View>   
    </View>
  )
}

export default Ownership

const styles = StyleSheet.create({
    
    heading:{
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',  
        marginTop:12,     
    },
    arrowstyling:{
        // marginLeft:10,
    },
    LandStyling:{
        marginLeft:75,
        fontFamily:Font.semiBold,
        fontSize:15,
    }

})