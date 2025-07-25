import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CompensationComponent from './CompensationComponent';

const Compensation = () => {
  return (
    <View style={styles.container}>
      <CompensationComponent
        title="Tobacco"
        process="Processing"
        date="25 Dec, 2024"
        claim="Your Claim is processing, you should in touch with us."
        payment="View Payment"
        titleColor="#F39E1E"
        contactColor="green"
        
      />
      <CompensationComponent
        title="Wheat"
        process="Settled"
        date="10 Nov, 2024"
        claim="Your Claim has been settled, you can"
        payment="View Payment"
         titleColor="green"
         contactColor="green"
      />
      <CompensationComponent
        title="Wheat"
        process="Cancelled"
        date="10 Nov, 2024"
        claim="Your Claim is processing, you should in touch with us."
        payment="View Payment"
         titleColor="#AC1318"
         contactColor="green"
      />
    </View>
  );
};

export default Compensation;

const styles = StyleSheet.create({
  container: {
    // width: 315,
    // height: 135,
    // backgroundColor: '#E0E0E0',
    marginTop: 80,
    // marginHorizontal: 23, //ya marginLeft
    // borderRadius: 5,
    // padding:10,
  },
  //   status: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems:'center',
  //   },

  //   Namestatus: {
  //     fontFamily: Font.semiBold,
  //     fontSize: 15,
  //   },
  //   Processstatus: {
  //     color: '#F39E1E',
  //     fontFamily: Font.medium,
  //     fontSize: 10,
  //   },
  //   claim: {
  //     width: 190,
  //   },
  //   claimtext: {
  //     fontSize: 10,
  //     color: '#646464',
  //     fontFamily: Font.medium,
  //   },
  //   contact: {
  //     width: 100,
  //     height: 30,
  //     backgroundColor: 'white',
  //     borderRadius: 15,
  //     borderColor: '#707070',
  //     flexDirection: 'row',
  //     borderWidth: 1,
  //     backgroundColor: '#E0E0E0',
  //     alignItems:'center',
  //   },
  //   contacttext: {
  //     fontSize: 10,
  //     fontFamily: Font.medium,
  //     color: 'green',
  //     marginLeft: 7,
  //   },
  //   contactcontainer: {
  //     marginTop:23,
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     alignItems:'center',
  //   },
  //   datetext: {
  //     fontFamily: Font.medium,
  //     fontSize: 10,
  //     color: '#646464',
  //   },
  wheat: {
    // marginTop:50,
  },
});
