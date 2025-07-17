import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddLand = () => {
  return (
    <View style={styles.container}>
         <Image source={require("../Screens/land.jpg")} style={styles.imagestyle}/>
         <Text style={styles.textcolor}>Upload Land Ownership Certification</Text>
    </View>
  )
}

export default AddLand

const styles = StyleSheet.create({
    container:{
        width:326,
        height:170,
        backgroundColor:"#D8DBD8",
        marginTop:40,
        borderRadius:8,
        alignItems:'center', // horizontal
         justifyContent:'center',
    },
    imagestyle:{
       width:85,
       height:80,           
    },
    textcolor:{
        color:"#777676",
        fontSize:16,
        marginTop:20,
    
    }
})