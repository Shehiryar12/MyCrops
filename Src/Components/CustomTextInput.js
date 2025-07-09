// import { StyleSheet, Text, TextInput, View } from 'react-native'
// import React from 'react'
// import { Font } from '../Constant/Fonts'
// import AntDesign from 'react-native-vector-icons/AntDesign';

// export default function CustomTextInput(props) {
//   return (
//     <View style={styles.container}>

//     <Text style={styles.Name}>{props.title}</Text>

//     <View styles={styles.inputBoxcontainer}>

//       <TextInput style={styles.input} placeholder={props.placeholder}/> 
//        <AntDesign name={"eye"} size={25} />

//     </View>

//       {/* <View style={styles.createicon}>  
        
//        <TextInput  style={styles.input}
//            placeholder={props.placeholder}
//            placeholderTextColor={"#DBD8D8"} 
//            keyboardType={props.keyboardtype}
//            secureTextEntry={props.secureTextEntry}
//         />
//               <AntDesign name={"eye"} size={25} />
   
//       </View>   */}
//     </View>
    
//   )
// }

// const styles = StyleSheet.create({

//   container:{
 
//       flex:1,
//     alignItems:'center'

//   },
//     input:{
//         // fontSize:13,
//         // fontFamily:Font.regular,
//         borderWidth:1,
//         borderRadius:7,
//         marginHorizontal:15,
//         borderColor:'green',
//         color:"black",
//         height:54,
//         marginTop:10,
//         width:300,
//         // flexDirection:'row'
//       },

//         Name:{
//         color:"#646464",
//         marginLeft:15,
//         fontSize:18,
//         marginTop:18,
//         fontFamily:Font.medium  
         
//    },

//     icon:{
//       // fontSize:20,
//       //  color:"red",
//       //  marginRight:5,
//       //  textAlign:'center',
//         // marginHorizontal:-15  
//     },

//     // container:{
//     //   flex:1,
//     //   // backgroundColor:'green',
//     // },
//     createicon:{
//       //  backgroundColor:'red',
//       //  flexDirection:'row',
//         // alignItems:'center'
//     },
//     inputbox:{
//       //  backgroundColor:'red',
//       // flex:1,
//       // flexDirection:'row'
//     },

  


 

// })

import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Register = (props) => {
  return (
    <View style={styles.container}>

       <View style={styles.inputBoxContainer}>   
          <TextInput style={styles.inputBox} placeholder={props.placeholder}/>    
          <AntDesign name={"eye"} size={25}/>  
      </View>


       {/* <View style={styles.inputBoxContainer}>   
          <AntDesign name={"lock"} size={25} placeholder={props.placeholder}/>  
          <TextInput style={styles.inputBox}/> 
           <AntDesign name={"eye"} size={25} />
        </View> */}
    </View>
  )
}

export default Register

const styles = StyleSheet.create({

 container:{
    // flex:1,
    alignItems:'center'
 },

 inputBoxContainer:{
         alignItems:'center',
        flexDirection:'row',
        borderWidth:1,
        width:'90%',
        marginVertical:13,
        borderRadius:10,
        paddingLeft:10,
        
 },
    inputBox:{
        // backgroundColor:'red',
        flex:1,
    }
})






















