import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';


const CustomTextInputTwo = (props) => {
    const [secure, setSecure] = useState(true);
  return (
    <View style={styles.inputcontainer}>
     
       <TextInput 
                  placeholder={props.placeholder}
                  secureTextEntry={secure}
                  style={{flex:1}}
       /> 
       <TouchableOpacity onPress={() => setSecure(!secure)}>
        <Feather name={secure ? 'eye-off' :"eye" }  size={20} style={styles.icon}/>  
       </TouchableOpacity> 
    </View>
  )
}

export default CustomTextInputTwo

const styles = StyleSheet.create({

    inputcontainer:{
         flexDirection:'row',
         alignItems:'center',
        borderWidth:1,
        marginHorizontal:12,
        marginVertical:10,
        borderRadius:10,
        // height:70,
        paddingVertical:5,
        // marginRight:15,
    },

    icon:{
      // marginRight:5,
      paddingRight:7,
    }

})