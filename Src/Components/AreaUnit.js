import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Font } from '../Constant/Fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const AreaUnit = () => {
  return (
    <View>
          <Text
            style={{
              marginLeft: 18,
              fontFamily: Font.medium,
              fontSize: 14,
              color: '#646464',
              marginTop:20,
            }}
          >
            Area Unit
          </Text>
    
          <View style={styles.innercontainer}>
            <TextInput
              style={styles.textinputstyle}
              placeholder="Select unit"
              placeholderTextColor="#DBD8D8"
              //  borderColor={"#DBD8D8"}
              //  borderRadius={10}
              maxLength={15}
              // marginLeft={35}
            />
    
            <MaterialIcons
              name="keyboard-arrow-down"
              size={24}
              color="#DBD8D8"
              style={{ marginRight: 10 }}
            />
          </View>
        </View>
  )

  
}

export default AreaUnit

const styles = StyleSheet.create({
     innercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DBD8D8',
    borderRadius: 10,
    width: 150,
    marginLeft:18,
  },

  textinputstyle: {
    flex: 1,
    fontFamily: Font.regular,
    fontSize: 13,
    borderRadius: 10,  
  },
})