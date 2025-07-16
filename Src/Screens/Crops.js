import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import IconEntypo from 'react-native-vector-icons/Entypo'
import TextComponents from './TextComponents'

const Crops = () => {
  return (
    <View style={styles.container}>

    <View style={styles.inner}> 
          <Icon name="menu" size={30} color="green" style={styles.iconstyle} />

     <View style={styles.innertwo}>     
          <Text>   04 APR 24 </Text>
          <Text style={styles.textmonday}>  MONDAY   </Text>
          <IconEntypo name="calendar"  color="black" size={18} />
     </View>
    </View>

    <View style={styles.box}>
     
        <View style={styles.box1}>
            <Text style={styles.innertext}>Farmer</Text>
            <Text style={styles.innertext}>26km/h</Text>                
        </View>

        <View style={styles.box2}> 
         <Text style={styles.innertexttwo}>ARSHAD ALI</Text> 
          <Text style={styles.innertexttwo}>24*</Text> 
        </View>
    </View>

    <TextComponents title={"LAND RECORD"} image={require("../../Src/Screens/imagone.jpg")}/>
    <TextComponents title={"CROP TO INSURE"} image={require("../../Src/Screens/imagone.jpg")}/>
    

     
   

 
   
    </View>
  )
}

export default Crops

const styles = StyleSheet.create({
    container:{
       
        backgroundColor:"#F0F7F8",
        flex:1,
        
       
    },
    inner:{
    flexDirection:"row",
    justifyContent:'space-between',  
    marginHorizontal:12,
    marginVertical:10,
    },
 
    innertwo:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:7,
        marginVertical:5,
        elevation:5,
    },
    textmonday:{
        fontSize:8, 
        marginTop:4,
    },
    box1:{
       
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:15,   
        borderRadius:10,     
    },
    innertext:{
        color:"white",
        marginVertical:5,
        marginHorizontal:8,
    },

    box2:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:21,     
    },
   
    box:{
        backgroundColor:'green',
        marginHorizontal:20,
        marginTop:10,
        height:70,
        borderRadius:8,
    },
    innertexttwo:{
        color:"white",
    },
    card:{
        borderWidth:1,
        width:155,
        height:155,
        backgroundColor:'white',
        elevation:6,
        borderRadius:14,
        borderColor:"#009245A3",
        marginLeft:17,
        marginVertical:28,
        alignItems:'center',
        justifyContent:'center',
    },

    landtext:{
         fontSize:12,
         marginTop:12,
    }
  
 
   
   
 
})
