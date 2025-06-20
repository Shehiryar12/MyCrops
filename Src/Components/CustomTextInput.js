import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function CustomTextInput(props) {
  return (
    <View>

    <Text style={styles.Name}>{props.title}</Text>
       <View style={styles.createicon}>
         
      <TextInput  style={styles.input} placeholder={props.placeholder} placeholderTextColor={"#DBD8D8"} keyboardType={props.keyboardtype}
      secureTextEntry={props.secureTextEntry} />
      <Icon name="visibility" style={styles.icon } />

      </View>
      

    
    </View>
    
  )
}

const styles = StyleSheet.create({
    input:{
        fontSize:14,
        fontFamily:Font.regular,
        borderWidth:1,
        borderRadius:7,
        marginHorizontal:15,
        borderColor:'green',
        color:"black",
        height:54,
        marginTop:10,
        width:300,
      },

        Name:{
        color:"#646464",
        marginLeft:15,
        fontSize:18,
        marginTop:18,
        fontFamily:Font.medium  
         
   },

    icon:{
      fontSize:16,
      color:"blue"
      //  textAlign:'right'

      
    },
    createicon:{
       backgroundColor:'red',
       flexDirection:'row',
       alignItems:'center'

    }
})