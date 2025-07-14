import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Learn = () => {
  return (
    <View style={styles.fullcontainer}>

     
      <View style={styles.header}>
        <Text style={styles.headerText}>Courses</Text>
      </View>

    
      <View style={styles.container}>
        <Image source={require("../../MyCrops/Src/Screens/Learn.png")} style={styles.imagestyle} />
        <Text style={styles.textone}> React Native Components</Text>
        <Text style={styles.text}>Two Types of Component are available in react native Two Types of Component are available in react </Text>
      </View>

    </View>
  )
}

export default Learn

const styles = StyleSheet.create({

  fullcontainer: {
    flex: 1,
   
  },

  header: {
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',

    elevation: 7,
  },

  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight:600,
    marginLeft:10,
  },

  container: {
    width: "90%",
    // height: 280,
    backgroundColor: "white",
    marginVertical: 10,
    alignSelf: 'center',
    borderRadius: 9,
    elevation: 7,
    paddingBottom:1
  },

  imagestyle: {
    width: "100%",
    elevation: 10,
    borderRadius: 9,
    marginVertical: 20,
    height: 193,
    alignSelf: 'center',
    backgroundColor: "grey",
    marginTop: -1,
  },

  textone: {
    fontWeight: '700',
    marginTop:-10,
    fontSize:17,
  },

  text: {
    marginLeft: 5,
    fontSize:14,
  },

})
