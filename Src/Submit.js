import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from './Constant/Fonts';

const Submit = () => {
  return (

   <View>
    <View style={styles.headingContainer}>
      <View style={styles.headingicon}>
        <MaterialIcons name="keyboard-arrow-left" size={24} marginLeft={10} />
      </View>
      <Text style={styles.heading}>Submit Insurance Claim</Text>
      </View> 

     <View style={styles.FLood}>
      <Text style={styles.floodstyle}>FLOOD DAMAGE TO WHEAT CROP</Text>
      <Text>Date of Incident</Text>
     </View> 
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {},

  headingContainer: {
    flexDirection: 'row',
    marginTop: 13,
    //  backgroundColor:'red',
  },
  heading: {
    // alignItems:"center",
    // backgroundColor:"red",
    // justifyContent:'center',
    marginLeft: 63,
    fontFamily: Font.semiBold,
  },
  floodstyle:{
    fontFamily:Font.bold,
    fontSize:12,
    marginLeft:20,
    marginTop:25,
  },
  
});
