import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'

const Claims = () => {
  return (
   <View style={styles.fullcontainer}>
      <View style={styles.container}>
      
          <View style={styles.innercontainer}>
           <Text style={styles.innertext}>Tobacco</Text>
           <Text style={styles.innertextprocess}>Processing</Text>

      </View>
             
                 <Text style={styles.claimtext}>Your Claim is processing, you should in touch with us.</Text>
       
               <View style={styles.endingcontainer}>
                 <TouchableOpacity  style={styles.button}>
                    <Icon name="phone-call" size={18} color={"green"} />
                    <Text style={styles.contacttext}>Contact Us</Text>
                 </TouchableOpacity>
                   <Text style={styles.textstyle}>25 Dec, 2024</Text>
                </View> 
                

      </View>
    
    </View>
  )
}

export default Claims

const styles = StyleSheet.create({

    fullcontainer:{
       alignItems:'center',
        marginTop:80,
    },
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
    },
    innertextprocess:{
      color:'orange',
      fontSize:10,
    },
    claimtext:{
        fontSize:11,
        color:'#646464',
       marginTop:2,
    paddingTop:7,
    width:180,
    },
    button:{
         width:134,
         height:37,
         borderRadius:23, 
         borderWidth:1,
       
         borderColor:"#707070",
        justifyContent:"space-between",
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
    },
    contacttext:{
        color:'green',
    },
    endingcontainer:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:28,
        justifyContent:'space-between',
    },
   
    
  
})