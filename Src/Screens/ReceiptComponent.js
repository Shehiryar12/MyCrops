import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReceiptComponent = () => {
  return (
    <View>
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
    </View>
  )
}

export default ReceiptComponent

const styles = StyleSheet.create({})