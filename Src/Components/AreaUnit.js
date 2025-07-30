import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AreaUnit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.labelone}>Area Unit</Text>
        <Text style={styles.labeltwo}>Area</Text>
      </View>

   
      <View style={styles.inputRow}>
     
        <View style={styles.inputWithIcon}>
          <TextInput
            style={styles.textInput}
            placeholder="Select unit"
            placeholderTextColor="#DBD8D8"
            maxLength={8}
          />
          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color="#DBD8D8"
            style={styles.icon}
          />
        </View>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter area"
            placeholderTextColor="#DBD8D8"
          />
        </View>
      </View>

      <View style={styles.buttonbox}>
        <TouchableOpacity style={[styles.buttonstyle]}>
            <Text style={styles.addstyle}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lineview}> 
         
      </View>
    </View>
  );
};

export default AreaUnit;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    // marginTop:10,
    paddingHorizontal: 8,
  },

  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },

  labelone: {
    fontFamily: Font.medium,
    fontSize: 14,
    color: '#646464',
    // width: 120,
    // backgroundColor:'red',
  },

   labeltwo: {
    fontFamily: Font.medium,
    fontSize: 14,
    color: '#646464',
    // width: 200,
    width:145,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 13,
    // paddingHorizontal: 10,
    width: 160,
    height: 50,
    backgroundColor: '#fff',
  },

  inputBox: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 13,
    paddingHorizontal: 10,
    width: '45%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  textInput: {
flex: 1,
    fontFamily: Font.regular,
    fontSize: 13,
    color: '#000',
    // textAlign:'center',
    paddingLeft:12,
    // width:50,
  },

  icon: {
    marginLeft: 8,
  },

  buttonstyle:{
    // textAlign:'right'
    // marginLeft:100,
    // alignItems:'flex-end',
    backgroundColor:"#009245",
    // paddingHorizontal:30,
    width:95,
    paddingTop:10,
    paddingBottom:10,
    alignItems:"center",
      borderRadius:10,
  
    
  },
  addstyle:{
    // alignitem:"flex-end"
    // paddingHorizontal:30,
    // marginHorizontal:200,
      color:'white',

  },
  buttonbox:{
    alignItems:'flex-end',
    marginTop:8,
    paddingHorizontal:10,  
  },
  lineview:{
    borderBottomColor:"#DBD8D8",
    borderBottomWidth:1,
    marginTop:14,
    marginHorizontal:13,
  }
});
