import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { Font } from '../../Constant/Fonts';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={29} color="green"/> 
        </TouchableOpacity>

        <View style={styles.date}>
            <Text  style={styles.textdate}> 04 APR 24 </Text>
            <Text style={styles.textday}>MONDAY</Text>
               <MaterialIcons name="calendar-today" size={14} color="black"/> 
         </View> 

      </View>

      
        <View style={styles.box}>
          <View style={styles.box1}>
               <Text style={styles.boxtext}>Farmer</Text>
               <Text style={styles.boxtext}>26km/h</Text>
          </View>

             <View style={styles.box2}>
              <Text style={styles.boxtexttwo}>ARSHAD ALI</Text>
               <Text style={styles.boxtexttwo}>24*</Text>
              </View>     
         </View>

         <View style={styles.landingbox}>

          
                 <View style={styles.landboxone}> 
                       <Image source={require("../Drawer/landone.jpg")} style={styles.landone}/>
                       <Text style={styles.textstyle}>LAND RECORD</Text>
                 </View> 
                 <View style={styles.landboxone}>
                  <Image source={require("../Drawer/landtwo.png")} style={styles.landone}/>
                    <Text style={styles.textstyle}>LAND OWNERSHIP DETAILS</Text>
                   </View>
                 <View style={styles.landboxone}> 
                   <Image source={require("../Drawer/landthree.jpg")} style={styles.landone}/>
                   <Text style={styles.textstyle}>CROP TO INSURE</Text>
                 </View>
                 <View style={styles.landboxone}> 
                   <Image source={require("../Drawer/landfour.png")} style={styles.landone}/>
                   <Text style={styles.textstyle}>LOSS COMPENSATION</Text>
                 </View>
                 <View style={styles.landboxone}> 
                   <Image source={require("../Drawer/landfive.jpg")} style={styles.landone}/>
                   <Text style={styles.textstyle}>LOSS ASSESSMENT</Text>
                 </View>
                 <View style={styles.landboxone}> 
                   <Image source={require("../Drawer/landsix.png")} style={styles.landone}/>
                   <Text style={styles.textstyle}>AUTHORIZED DEALERSHIP</Text>
                 </View>
                            
                                
                                 
         </View>
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F7F8',
    flex: 1,
  },
  inner:{
       flexDirection:'row',
       justifyContent:'space-between',
       paddingHorizontal:13,
       paddingTop:30,

  },
  date:{
         width:150,
         height:30,
         backgroundColor:"white",
         borderRadius:16,
         elevation:5,
         flexDirection:'row',
         justifyContent:'center',
        //  alignItems:'center',         //align item center sai chal raha hai
        padding:4,
         
  },
   textdate:{
           fontFamily:Font.semiBold,
          fontSize:13,
   },
  textday:{
         fontSize:8, 
         marginTop:3,   
         fontFamily:Font.regular,
        paddingHorizontal:4,
  },

  box:{
       width:330,
       height:70,
       backgroundColor:'#009245',
       borderRadius:13,
       marginTop:25,
       marginHorizontal:15,
       padding:10,
  },
  box1:{
        flexDirection:'row',
        justifyContent:'space-between',
  },
  boxtext:{
    color:"#DBD8D8",
    fontSize:14,
    fontFamily:Font.regular,
  },
 box2:{
  flexDirection:'row',
  justifyContent:'space-between',
 },
 boxtexttwo:{
  fontSize:18,
  fontFamily:Font.semiBold,
  color:"white",
 },
 landingbox:{
   flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  paddingHorizontal:18,
 },
 landboxone:{
    width:140,
    height:143,
    marginTop:20,
    // marginLeft:10,
    // borderWidth:1,
    borderColor:"#009245A3",
    borderRadius:12,
    elevation:15,
    backgroundColor:'white',
    justifyContent:'center',
    // textAlign:'center',
    alignItems:'center',
 },
landone:{
  width:65,
  height:65,
},
textstyle:{
  fontSize:9,
  fontFamily:Font.semiBold,
}
});
