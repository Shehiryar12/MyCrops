import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Font } from '../Constant/Fonts';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Pagethree = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TouchableOpacity style={styles.backbuttonwrapper} onPress={handleGoback}>
        <Ionicons name={'arrow-back'} style={styles.arrow} />
      </TouchableOpacity>

      <View style={styles.textcontainer}>
        <Text style={styles.handlingtext}>Let's get</Text>
        <Text style={styles.handlingtext}>started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputcontainer}>
          <Ionicons name={'mail-outline'} size={25} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputcontainer}>
          <SimpleLineIcons name={'lock'} size={25} marginHorizontal={1} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            secureTextEntry={secureEntry}
          />

          <TouchableOpacity
            onPress={() => {
              setSecureEntry(!secureEntry);
            }}
          >
              <Octicons name={secureEntry ? 'eye-closed' : 'eye'} size={20} marginRight={13} />
            
          </TouchableOpacity>
        </View>

        <View style={styles.inputcontainer}>
          <SimpleLineIcons
            name={'screen-smartphone'}
            size={25}
            marginHorizontal={1}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Phone no"
            keyboardType="number-pad"
            maxLength={11}
          />
        </View>

        {/* <TouchableOpacity>
            <Text   style={styles.forgotpasswordtext}>Forgot password?</Text>
          </TouchableOpacity> */}

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.logintext}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.continuetext}>or Continue with</Text>

        <TouchableOpacity style={styles.googlebuttoncontainer}>
          <Image
            source={require('../Screens/google.png')}
            style={styles.googleimage}
          />
          <Text style={styles.googletext}>Google</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.accounttext}>Already have an account!</Text>
          <Text style={styles.Signuuptext}>Login</Text>
        </View>
      </View>
    </View>
  );
};

export default Pagethree;

const styles = StyleSheet.create({
  backbuttonwrapper: {
    fontSize: 27,
    marginLeft: 17,
    marginVertical: 10,
    backgroundColor: 'grey',
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
  },

  handlingtext: {
    fontSize: 32,
    marginLeft: 15,
    fontFamily: Font.regular,
  },

  inputcontainer: {
    borderWidth: 1,
    marginHorizontal: 17,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 14,
    marginVertical: 10,
    marginRight: 5,
  },

  textInput: {
    flex: 1,
    paddingHorizontal: 20,
    fontFamily: Font.regular,
    padding: 10,
    marginVertical: 4,
  },

  forgotpasswordtext: {
    textAlign: 'right',
    marginRight: 15,
  },
  loginButton: {
    marginVertical: 20,
    backgroundColor: 'black',
    marginHorizontal: 12,
    borderRadius: 50,
  },

  logintext: {
    color: 'white',
    textAlign: 'center',
    padding: 9,
    fontFamily: Font.regular,
    fontSize: 20,
  },

  continuetext: {
    textAlign: 'center',
    color: 'black',
    marginVertical: 10,
    fontFamily: Font.regular,
  },

  googleimage: {
    height: 20,
    width: 17,
  },

  googlebuttoncontainer: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 12,
    marginVertical: 10,
  },

  googletext: {
    fontSize: 20,
    fontFamily: Font.regular,
    marginLeft: 10,
  },

  footerContainer: {
    marginLeft: 17,
    // marginTop:10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3,
  },

  accounttext: {
    fontFamily: Font.regular,
    marginVertical: 10,
  },

  Signuuptext: {
    fontFamily: Font.semiBold,
    marginVertical: 10,
  },
});
