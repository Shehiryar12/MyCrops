import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Font } from '../Constant/Fonts'

const ClaimComponent = (props) => {
  return (
     <View style={styles.container}>
      
          <View style={styles.innercontainer}>
           <Text style={styles.innertext}>{props.title}</Text>
           <Text style={styles.innertextprocess}>{props.status}</Text>

      </View>
             
                 <Text style={styles.claimtext}>{props.description}</Text>
       
               <View style={styles.endingcontainer}>
                 <TouchableOpacity  style={styles.button}>

                    <Icon name="phone-call" size={15} color={"green"} />
                    <Text style={styles.contacttext}>{props.contact}</Text>

                 </TouchableOpacity>

                   <Text style={styles.textstyle}>{props.Date}</Text>
                </View> 
                

      </View>
  )
}

export default ClaimComponent

const styles = StyleSheet.create({
  
    container:{
        width:330,
        height:150,
        backgroundColor:"#EBEBEB",
        borderRadius:9,
        padding:14,
     
    },

      innercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    
    innertext:{
        fontSize:18,
        fontFamily:Font.bold,
    },
    innertextprocess:{
      color:'orange',
      fontSize:11,
       fontFamily:Font.medium,

    },
    claimtext:{
        fontSize:10,
        color:'#646464',
       marginTop:2,
    paddingTop:7,
    width:190,
    fontFamily:Font.medium,
    },
    button:{
         width:128,
         height:37,
         borderRadius:23, 
         borderWidth:1,
       
         borderColor:"#707070",
        justifyContent:"space-between",
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30,
    },
    contacttext:{
        color:'green',
        fontFamily:Font.medium,
        fontSize:11,
    },
    endingcontainer:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:14,
        justifyContent:'space-between',
       
        
    },
    textstyle:{
        fontSize:11,
        fontFamily:Font.medium,
        color:"#646464",
    }
})