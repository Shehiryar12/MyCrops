import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const FlexGrow = () => {
  return (
    <View style={styles.container}>
      
      <Text style={{ backgroundColor:'red' }}>red</Text>
      <Text style={{ backgroundColor:'green'}}>Green</Text>
      <Text style={{ backgroundColor:'yellow'}}>yellow</Text>
      <Text style={{ backgroundColor:'blue'}}>blue</Text>

    <View style={styles.grow}>

      <Text>greyds</Text>
    </View>   
    </View>
  )
}

export default FlexGrow

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    grow:{

         backgroundColor:'grey',
        //  flexGrow:2,
        flexGrow:1,
        // flexBasis:100

    }
})