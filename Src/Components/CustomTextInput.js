import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entry from './Entry'

const CustomTextInput = (props) => {
    const [pass,setPass]=useState(true)
  return (
    <View>
      {/* <Entry/> */}

       <View style={styles.container}>
            <View style={styles.header}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={30}
                marginTop={10}
                marginLeft={5}
              />
              <Text style={styles.heading}>{props.label}</Text>
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
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderColor}
                style={styles.textinputstyle}
                secureTextEntry={props.pass}
              />
      
           <TouchableOpacity onPress={()=>setPass(!pass)}>
                 <MaterialIcons name={props.pass? "props.visibility":"props.visibility-off"}/>
           </TouchableOpacity>
            </View>
          </View>
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({})