import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'

const ReceiptComponent = (props) => {

    const TextComp=(props)=>{
        return(
            <View style={styles.Products}>
              <Text style={[styles.Descriptiontext,{width:150}]}>
                Stick Class Dispersing and adhesive 
              </Text>
              <Text  style={[styles.Descriptiontext,{width:50,textAlign:'center'}]}>{props.item}</Text>
              <Text  style={[styles.Descriptiontext,{width:80,textAlign:'right'}]}>{props.price}</Text>    
            </View>
            

        )
    }
  return (
    <View>
           <View style={styles.container}>
              <Text style={styles.headingtext}>{props.title}</Text>
      
            <View style={styles.Products}>
                
              <Text style={[styles.producttext,{width:150}]}>{'Product'}</Text>
              <Text style={[styles.producttext,{width:50,textAlign:'center'}]}> {"item"}</Text>
              <Text style={[styles.producttext,{width:80,textAlign:'right'}]}>{"Price(Rs)"}</Text>
            </View>
      
         
          <TextComp product="Stick Class Dispersing and adhesive" item="3" price="5600"/>
          <TextComp product="Strong plus High phosphor that increase" item="2" price="5200"/>

        <View style={styles.dotting}>
          <View style={styles.dot}/>
           <View style={styles.combine}>
              <Text style={[styles.texting,{backgroundColor:'red'}]}>Total</Text>
              <Text style={[styles.texting,{backgroundColor:'green',textAlign:'right',width:100}]}>4</Text>
              <Text style={[styles.texting,{backgroundColor:'yellow'}]}>10800</Text>
           </View>   
          </View>             
        </View>  
                 
          
    </View>
  )
}

export default ReceiptComponent

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
        fontFamily: Font.semiBold,
        marginTop:10,
      },
      Descriptiontext: {
        color: '#DBD8D8',
        fontSize: 10,
        fontFamily: Font.regular,
        marginTop:7,
      },
    
    linetwo:{
        color:"#DBD8D8",
         fontSize: 10,
    },
    dot:{
       borderBottomColor: '#AAAAAA',   
       borderBottomWidth: 1,
       width: '100%',
       marginTop:100, 
       borderStyle:'dashed',    
                
    },
    texting:{
        color:"white",
    },
    combine:{
      flexDirection:'row',
      justifyContent:'space-between',
    }
})