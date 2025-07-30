import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Font } from './Constant/Fonts';

const Submit = () => {

   const Comp = (props) => {
    return(
            <Image source={props.img} style={styles.grassstyle}/>
    )
   }

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
          <MaterialIcons name="keyboard-arrow-left" size={24} style={{margin: -7}} />
        <Text style={styles.heading}>Submit Insurance Claim</Text>
        <View style={{width:14}}>      
        </View>
      </View>

        <Text style={styles.floodstyle}>FLOOD DAMAGE TO WHEAT CROP</Text>
        <Text style={styles.Incidentdate}>Date of Incident</Text>
        <Text style={styles.date}>Dec 12, 2024</Text>
        <Text style={styles.uploadpicture}>Upload Pictures</Text>

      <View style={styles.box}>
          <Comp
            img={require('../Src/Screens/grassone.jpg')}
          />
          <Comp
            img={require('../Src/Screens/grasstwo.jpg')}
          />
          <Comp
            img={require('../Src/Screens/grassthree.jpg')}
         
          />
          <Comp
            img={require('../Src/Screens/grassfour.jpg')}
          
          />
          <Comp
           img={require('../Src/Screens/grassfive.jpg')}
          
          />
          <View style={styles.outerimage}>
            <MaterialIcons name="add" size={30}  />
          </View>
      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.submitclaim}>Submit Claim</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Submit;

const styles = StyleSheet.create({
  container: {
    marginTop:13,
    flex:1,
    marginHorizontal:20,
  },

  headingContainer: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:"space-between",
  },
  heading: {
    fontFamily: Font.semiBold,
  },
  floodstyle: {
    fontFamily: Font.bold,
    fontSize: 12,
    marginTop: 25,
  },
  Incidentdate: {
    color: '#646464',
    fontFamily: Font.regular,
    fontSize: 12,
    marginTop: 6,
  },
  date: {
    fontFamily: Font.semiBold,
    fontSize: 12,
  },
  uploadpicture: {
    marginTop: 21,
    fontSize: 12,
    fontFamily: Font.semiBold,
  },
  box: {
    borderRadius: 13,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#DBD8D8',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    alignItems:'center',
    padding:5,
  },
  grassstyle: {
    width: 95,
    height: 95,
    borderRadius: 13,
  },
  outerimage: {
    width: 95,
    height: 95,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#DBD8D8',
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#009245',
    marginTop: 200,
    padding: 9,
    borderRadius: 7,
  },
  submitclaim: {
    textAlign: 'center',
    color: 'white',
    fontFamily: Font.semiBold,
    fontSize: 13,
  },
});
