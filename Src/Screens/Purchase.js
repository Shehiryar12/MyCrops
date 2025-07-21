import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Font } from '../Constant/Fonts'

const Buying = () => {
  const [count, setCount] = useState(0)

  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../Screens/coca.jpg")} style={styles.imagestyle} />
        <Text style={styles.description}>Stick Class Dispersing and adhesive</Text>

                    <View style={styles.numbers}>
                                 {/* <TouchableOpacity disabled={count == 0 ? true : false} onPress={() => setCount(count-1)}> */}
                                 <TouchableOpacity disabled={count == 0 ? true : false} onPress={()=>setCount(count-1)}>
                                      <Text style={styles.numone}>-</Text>
                                 </TouchableOpacity>

          <Text style={styles.numtwo}>{count}</Text>

          <TouchableOpacity onPress={() => setCount(count + 1)}>
            <Text style={styles.numone}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.innercontainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Delete Item</Text>
          </TouchableOpacity>
          <Text style={styles.price}>RS. 2800</Text>
        </View>
      </View>
    </View>
  )
}

export default Buying

const styles = StyleSheet.create({
  container: {
    width: 183,
    height: 260,
    backgroundColor: 'white',
    borderRadius: 13,
    elevation: 9,
    alignItems: 'center',
    marginTop: 57,
    marginHorizontal: 13,           //ya marginleft use karo
  },

   imagestyle:{
    width:60,
    height:140,
  },

  description: {
    fontFamily: Font.bold,
    fontSize: 12,
    width: 155,
  },
  itemstyle: {
    color: "white",
  },
  button: {
    width: 95,
    height: 30,
    backgroundColor: '#C92E2E',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttontext: {
    color: "#FFFFFF",
    fontFamily: Font.medium,
    fontSize: 12,
  },
  innercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  price: {
    paddingLeft: 10,
    fontFamily: Font.bold,
  },
  numbers: {
    flexDirection: 'row',
    width: 160,
    marginTop: 10,

  },
  numtwo: {
    paddingHorizontal:5,
    color:"#646464",
  },
  numone: {
    fontSize: 11,
    borderRadius: 5,
    borderColor: '#707070',
    borderWidth: 1,
    height: 18,
    paddingHorizontal: 6,
   
  },

 
  
})
