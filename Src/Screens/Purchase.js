import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'

const Buying = () => {
  return (
   <View>
    <View style={styles.container}>
         <Image source={require("../Screens/coca.jpg")} style={styles.imagestyle}/>
         <Text style={styles.description}>Stick Class Dispersing and adhesive</Text>
        

          <View style={styles.numbers}>
            <Text style={styles.numone}>-</Text>
            <Text style={styles.numtwo}> 2 </Text>
            <Text style={styles.numone}>+</Text>
            </View> 

            
    <View style={styles.innercontainer}>
                     <TouchableOpacity style={styles.button}>   
                        <Text style={styles.buttontext}>Delete Item</Text>
                     </TouchableOpacity>
                     <Text style={styles.price}>RS. 2800</Text>
          </View>
  
    </View>

    </View>       
  )
}

export default Buying

const styles = StyleSheet.create({
    container:{
        width:183,
        height:235,
        backgroundColor:'white',
        borderRadius:13,
        elevation:9,
        alignItems:'center',
       marginTop:70,
       marginHorizontal:10,
    },
    imagestyle:{
        width:100,
        height:130,
           
    },
    description:{
        fontFamily:Font.bold,
        fontSize:12,
        width:155,      
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
        // marginTop:4,
    
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
        marginTop:13,
      
    },
    price:{
        paddingLeft:10,
        fontFamily:Font.bold,
    },
    numbers:{
        flexDirection:'row',
        // backgroundColor:'red',
        // flex:1,
        width:160,
        // height:10,    
    },
    numtwo:{
       fontSize:12,
    },

     numone:{
       fontSize:12,
      borderRadius:5,
        borderColor:'#707070',
        borderWidth:1,
       height:17,
       paddingLeft:6,
        
     width:20,
    }
   
    
   
   
})