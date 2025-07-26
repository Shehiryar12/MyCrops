import { Image, StyleSheet, Text, View } from 'react-native';
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
        <Text style={styles.Incidentdate}>Date of Incident</Text>
        <Text style={styles.date}>Dec 12, 2024</Text>
        <Text style={styles.uploadpicture}>Upload Pictures</Text>
      </View>

      <View style={styles.box}>
        <View style={styles.imagepackage}>
           <Image source={require("../Src/Screens/grassone.jpg")} style={styles.grassstyle}/>
           <Image source={require("../Src/Screens/grasstwo.jpg")} style={styles.grassstyle}/>
           <Image source={require("../Src/Screens/grassthree.jpg")} style={styles.grassstyle}/>  
        <View style={styles.grassimage}>    
         <View style={styles.grassfour}>             
           <Image source={require("../Src/Screens/grassfour.jpg")} style={styles.grassstyle}/>
           <Image source={require("../Src/Screens/grassfive.jpg")} style={styles.grassstyle}/>
           <Text style={styles.plus}></Text>
        </View>   
        </View>         
        </View>
        
        
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
  floodstyle: {
    fontFamily: Font.bold,
    fontSize: 12,
    marginLeft: 20,
    marginTop: 25,
  },
  Incidentdate: {
    marginLeft: 20,
    color: '#646464',
    fontFamily: Font.regular,
    fontSize: 12,
    marginTop: 6,
  },
  date: {
    fontFamily: Font.semiBold,
    fontSize: 12,
    marginLeft: 20,
  },
  uploadpicture: {
    marginLeft: 20,
    marginTop: 21,
    fontSize: 12,
    fontFamily: Font.semiBold,
  },
  box:{
    width:317,
    height:223,
    borderRadius:13,
    marginTop:20,
    marginLeft:26,
    borderWidth:1,
    borderColor:"#DBD8D8",
  
  },
    imagepackage:{
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:2,
    paddingTop:10,
    paddingRight:5,
    paddingLeft:5,
    flexWrap:"wrap",
    // padding:7,
    // marginLeft:10,
    // justifyContent:"space-between",
  
  },
  grassstyle:{
     width:95,
     height:95,
     backgroundColor:'red',
     borderRadius:13, 
    //  padding:10,
    // justifyContent:'space-between',
    // marginTop:4,    
  },
  grassfour:{
    paddingTop:10,
    flexDirection:'row',
    marginLeft:4,
  },
  plus:{
    width:95,
    height:95,
    borderRadius:13,
    borderWidth:1,
    borderColor:'#DBD8D8',
  },
  // grassimage:{
  //   paddingLeft:3,
  // }

});
