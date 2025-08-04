import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from '../Constant/Fonts';

const Entry = () => {
  const [pass,setPass]=useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={30}
          marginTop={10}
          marginLeft={5}
        />
        <Text style={styles.heading}>Welcome Back!</Text>
        <View style={{ width: 31 }}></View>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: '#009245',
          fontFamily: Font.semiBold,
          paddingHorizontal: 18,
          marginTop: 13,
        }}
      >
        Sign In
      </Text>
      <Text
        style={{
          fontFamily: Font.medium,
          color: '#646464',
          paddingHorizontal: 18,
          marginTop: 10,
        }}
      >
        Phone/cnic/email id
      </Text>
      <View style={styles.passwordcontainer}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor={'#DBD8D8'}
          style={styles.textinputstyle}
          secureTextEntry={pass}
        />
      {/* <TouchableOpacity onPress={()=>setPass(!pass)}>  
        <MaterialIcons name={pass? "visibility":"visibility-off"}/>
      </TouchableOpacity>   */}

      {/* <TouchableOpacity onPress={()=>(setPass(!pass))}>
            <MaterialIcons name={pass? "visibility-off":"visibility"}/>
      </TouchableOpacity> */}

     <TouchableOpacity onPress={()=>setPass(!pass)}>
           <MaterialIcons name={pass? "visibility":"visibility"}/>
     </TouchableOpacity>
      </View>
    </View>
  );
};

export default Entry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    marginTop: 60,
    fontFamily: Font.semiBold,
    fontSize: 16,
  },
  passwordcontainer:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:1,
    paddingHorizontal:10,
    marginHorizontal:19,
    borderColor:"#DBD8D8",
    borderRadius:8,
   
  },
  textinputstyle: {
        fontSize:14,
  },
});
