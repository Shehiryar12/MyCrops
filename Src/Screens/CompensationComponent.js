import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'
import Icon from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CompensationComponent = (props) => {
  return (
     <View style={styles.container}>
    
            <View style={styles.status}>
              <Text style={styles.Namestatus}>{props.title}</Text>
              <Text style={[styles.Processstatus,{color:props.titleColor}]}>{props.process}</Text>
            </View>
    
            <View style={styles.claim}>
              <Text style={styles.claimtext}>
                {props.claim}
              </Text>
            </View>
    
          <View style={styles.contactcontainer}>
              <TouchableOpacity style={styles.contact}>
                <Icon name="phone-call" size={10} color={'green'} padding={5} />
                <Text style={[styles.contacttext,{color:props.contactColor}]}>Contact Us</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.payment}>
                <MaterialIcons name="payment" size={15} color={'green'} padding={5} />
                     <Text style={styles.paymenttext}>{props.payment}</Text>
              </TouchableOpacity>
    
              <Text style={styles.datetext}>{props.date}</Text>
          </View>
        </View>
  )
}

export default CompensationComponent

const styles = StyleSheet.create({
      container: {
        width: 315,
        height: 135,
        backgroundColor: '#E0E0E0',
       
        marginHorizontal: 23, //ya marginLeft
        borderRadius: 5,
        padding:10,
        marginBottom:20,
      },
      status: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
      },
    
      Namestatus: {
        fontFamily: Font.semiBold,
        fontSize: 15,
      },
      Processstatus: {
        // color: '#F39E1E',
        fontFamily: Font.medium,
        fontSize: 10,
      },
      claim: {
        width: 190,
      },
      claimtext: {
        fontSize: 10,
        color: '#646464',
        fontFamily: Font.medium,
        // width:200,
      },
      contact: {
        width: 100,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#707070',
        flexDirection: 'row',
        borderWidth: 1,
        backgroundColor: '#E0E0E0',
        alignItems:'center',
      },
      contacttext: {
        fontSize: 10,
        fontFamily: Font.medium,
        color: 'green',
        marginLeft: 7,
      },
      contactcontainer: {
        marginTop:23,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
      },
      datetext: {
        fontFamily: Font.medium,
        fontSize: 10,
        color: '#646464',
      },
      paymenttext:{

        fontSize: 10,
        fontFamily: Font.medium,
        color: 'green',
      
        alignItems:'center',
        justifyContent:'center',
      
      },
      payment:{
        backgroundColor:'lightgrey',
        width:105,
        height:30,
        borderRadius: 15,
        borderColor: '#707070',
        flexDirection:'row',
        alignItems:'center',
     
      }
})