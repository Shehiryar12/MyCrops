import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Fonts';

const Receipt = () => {

    
  return (
    <View style={styles.container}>
        <Text style={styles.headingtext}>Khan Fertilizer</Text>

      <View style={styles.Products}>
        <Text style={[styles.producttext,{width:150}]}>Product</Text>
        <Text style={[styles.producttext,{width:50,textAlign:'center'}]}>Items</Text>
        <Text style={[styles.producttext,{width:80,textAlign:'right'}]}>Price(Rs)</Text>
      </View>

      <View style={styles.Products}>
        <Text style={[styles.Descriptiontext,{width:150}]}>
          Stick Class Dispersing and adhesive
        </Text>
        <Text  style={[styles.Descriptiontext,{width:50,textAlign:'center'}]}>2</Text>
        <Text  style={[styles.Descriptiontext,{width:80,textAlign:'right'}]}>5600</Text>    
      </View>

      <View style={styles.Productstwo}> 
             <Text style={[styles.linetwo,{width:150}]}>Strong plus High phosphor that increase</Text>
             <Text style={[styles.linetwo,{width:50,textAlign:'center'}]}>2</Text>
             <Text style={[styles.linetwo,{width:80,textAlign:'right'}]}>5200</Text>
      </View>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: {
    width: 315,
    height: 480,
    backgroundColor: '#24282E',
    marginTop: 110,
    marginHorizontal: 25, //ya marginLeft:10
    borderRadius: 8,
    padding:12,
  },
  headingtext: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: Font.medium,
    textAlign: 'center',
  },
  Products: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  producttext: {
    color: '#86BC41',
    fontSize: 14,
    fontFamily: Font.semiBold,
  },
  Descriptiontext: {
    color: '#DBD8D8',
    fontSize: 10,
    fontFamily: Font.regular,
  },
  Productstwo:{
    flexDirection:'row',
    justifyContent:'space-between',
  },

linetwo:{
    color:"#DBD8D8",
     fontSize: 10,

}
});
