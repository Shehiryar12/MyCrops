import { Image, StyleSheet,  View } from 'react-native'
import React from 'react'
import LandComponent from './LandComponent'

const AddLand = () => {
  return (
   <View style={styles.fullcontainer}> 
      <LandComponent title="Upload Land Ownership Certification" image={require("../Screens/land.jpg")}/>

    </View>
  )
}

export default AddLand

const styles = StyleSheet.create({
    fullcontainer:{
        alignItems:'center',     
    },

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
    },
    
})