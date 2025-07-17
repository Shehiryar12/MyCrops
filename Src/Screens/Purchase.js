import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'

const Buying = () => {
  return (
    <View style={styles.container}>
         <Image source={require("../Screens/coca.jpg")} style={styles.imagestyle}/>
         <Text style={styles.description}>Stick Class Dispersing and adhesive</Text>
     
         <View style={styles.numtext}>
             <Text style={styles.number1}>-</Text>   
         </View>
          
          <View style={styles.innercontainer}>
                     <TouchableOpacity style={styles.button}>   
                        <Text style={styles.buttontext}>Delete Item</Text>
                     </TouchableOpacity>
                     <Text style={styles.price}>RS. 2800</Text>
          </View>
  
    </View>
  )
}

export default Buying

const styles = StyleSheet.create({
    container:{
        width:212,
        height:295,
        backgroundColor:'white',
        borderRadius:13,
        elevation:9,
        alignItems:'center',
       marginTop:70,
    },
    imagestyle:{
        width:152,
        height:185,
        marginTop:10,     
    },
    description:{
        fontFamily:Font.bold,
        fontSize:12,
        width:150,      
    },
    itemstyle:{
        color:"white",   
    },
    button:{
        width:95,
        height:30,
        backgroundColor:'#C92E2E',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    
    },
    buttontext:{
         color:"#FFFFFF",
         fontFamily:Font.medium,
         fontSize:12,
        //  paddingLeft:5,
    },
    innercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:8
    },
    price:{
        paddingLeft:20,
        fontFamily:Font.semiBold,
    },
    
    number1:{     
        // widh:1,
        // borderWidth:1,   
        // paddingRight:190,
        // width:1,
        // height:1,
        // backgroundColor:'red',   
    }
    
   
})