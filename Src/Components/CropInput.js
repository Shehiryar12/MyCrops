import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { Font } from '../Constant/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CropInput = () => {
  return (
    <View style={{ marginTop: 17 }}>
      <Text
        style={[
          styles.crops,
          {
            marginLeft: 16,
            color: '#646464',
            fontSize: 14,
          },
        ]}
      >
        Crop
      </Text>

      <View style={styles.inputWithIcon}>
        <TextInput
          placeholder=" Select crop"
          placeholderTextColor="#DBD8D8"
          style={styles.textInputStyle}
          fontSize={12}
        />
        <MaterialIcons name="keyboard-arrow-down" size={24} color="#DBD8D8" />
      </View>
    </View>
  );
};

export default CropInput;

const styles = StyleSheet.create({
  crops: {
    fontFamily: Font.semiBold,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#009245',
    marginHorizontal: 18,
    height: 54,
    backgroundColor: '#fff',
  },
  textInputStyle: {
    flex: 1,
    fontFamily: Font.regular,
    fontSize: 15,
    color: '#000',
  },
});
