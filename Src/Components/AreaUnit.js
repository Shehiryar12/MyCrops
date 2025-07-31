import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={styles.buttonbox}>
        <TouchableOpacity style={[styles.buttonstyle]}>
          <Text style={styles.addstyle}>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lineview}></View>

      <View style={styles.data}>
        <Text style={styles.heading}>Crop</Text>
        <Text style={styles.heading}>Unit</Text>
        <Text style={styles.heading}>Area</Text>
      </View>

      <View style={styles.dataone}>
        <Text style={styles.headingone}>Cotton</Text>
        <Text style={[styles.headingone, { marginRight: 24 }]}>Acre</Text>
        <Text style={styles.headingone}>100</Text>
      </View>

      <View style={styles.dataone}>
        <Text style={styles.headingone}>Rice</Text>
        <Text style={[styles.headingone, { marginRight: 12 }]}>Acre</Text>
        <Text style={styles.headingone}>80</Text>
      </View>

      <View style={styles.dataone}>
        <Text style={styles.headingone}>Wheat</Text>
        <Text style={[styles.headingone, { marginRight: 28 }]}>Acre</Text>
        <Text style={styles.headingone}>20</Text>
      </View>

      <View style={styles.button}>
        <TouchableOpacity>
          <Text style={styles.nexttext}>Next</Text>
        </TouchableOpacity>
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
  },

  labeltwo: {
    fontFamily: Font.medium,
    fontSize: 14,
    color: '#646464',
    width: 145,
  },

  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 13,
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
    fontSize: 11,
    color: '#000',
    paddingLeft: 8,
  },

  icon: {
    marginLeft: 8,
  },

  buttonstyle: {
    backgroundColor: '#009245',
    //  fontFamily:Font.regular,

    width: 95,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'center',
    borderRadius: 10,
  },
  addstyle: {
    color: 'white',
    fontFamily: Font.regular,
  },
  buttonbox: {
    alignItems: 'flex-end',
    marginTop: 17,
    paddingHorizontal: 10,
  },
  lineview: {
    borderBottomColor: '#DBD8D8',
    borderBottomWidth: 1,
    marginTop: 15,
    marginHorizontal: 13,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 13,
    marginTop:10,
  },
  heading: {
    color: 'green',
    fontFamily: Font.semiBold,
    fontSize: 15,
  },
  dataone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    fontFamily: Font.regular,
  },
  headingone: {
    // textAlign:'center',
    marginTop: 6,
    color: '#646464',
    fontFamily: Font.regular,
    fontSize: 12,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'green',
    marginTop: 200,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 12,
  },
  nexttext: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.semiBold,
  },
});
