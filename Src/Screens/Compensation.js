import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Fonts';
import Icon from 'react-native-vector-icons/Feather';

const Compensation = () => {
  return (
    <View style={styles.container}>

        <View style={styles.status}>
          <Text style={styles.Namestatus}>Tobacco</Text>
          <Text style={styles.Processstatus}>Processing</Text>
        </View>

        <View style={styles.claim}>
          <Text style={styles.claimtext}>
            Your Claim is processing, you should in touch with us.
          </Text>
        </View>

      <View style={styles.contactcontainer}>
          <TouchableOpacity style={styles.contact}>
            <Icon name="phone-call" size={10} color={'green'} padding={5} />
            <Text style={styles.contacttext}>Contact Us</Text>
          </TouchableOpacity>

          <Text style={styles.datetext}>25 Dec, 2024</Text>
      </View>
    </View>
  );
};

export default Compensation;

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 135,
    backgroundColor: '#E0E0E0',
    marginTop: 80,
    marginHorizontal: 23, //ya marginLeft
    borderRadius: 5,
    padding:10,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },

  Namestatus: {
    fontFamily: Font.semiBold,
    fontSize: 15,
  },
  Processstatus: {
    color: '#F39E1E',
    fontFamily: Font.medium,
    fontSize: 10,
  },
  claim: {
    width: 190,
  },
  claimtext: {
    fontSize: 10,
    color: '#646464',
    fontFamily: Font.medium,
  },
  contact: {
    width: 100,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: '#707070',
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#E0E0E0',
    alignItems:'center',
  },
  contacttext: {
    fontSize: 10,
    fontFamily: Font.medium,
    color: 'green',
    marginLeft: 7,
  },
  contactcontainer: {
    marginTop:23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  datetext: {
    fontFamily: Font.medium,
    fontSize: 10,
    color: '#646464',
  },
});
