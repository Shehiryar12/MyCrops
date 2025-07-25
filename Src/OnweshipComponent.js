import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from './Constant/Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const OnweshipComponent = props => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <MaterialIcons
          name="keyboard-arrow-left"
          size={27}
          style={styles.arrowstyling}
        />
        <Text style={styles.LandStyling}>{props.title}</Text>
      </View>

      <View style={styles.boxed}>
        <View style={styles.box}>
          <Image
            source={require('../Src/Screens/Home.jpg')}
            style={styles.Homestyle}
          />
          <View style={StyleSheet.texting}>
            <Text style={styles.textstyle}>{props.heading}</Text>
            <Text style={styles.textstyling}>{props.place}</Text>

            <Text style={styles.dotline} />
            <View style={styles.Areadetail}>
              <Text style={styles.areas}>
                Total Areas:<Text style={styles.acres}>{props.area}</Text>
              </Text>
              <MaterialIcons
                name="arrow-drop-down-circle"
                marginLeft="30"
                color="green"
                marginTop="6"
              />
              <Text
                style={[
                  {
                    fontSize: 9,
                    fontFamily: Font.medium,
                    width: 75,
                    textAlign: 'center',
                    color: '#646464',
                    marginTop: 6,
                  },
                ]}
              >
                {props.certificate}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OnweshipComponent;

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'center',
    marginTop: 25,
  },
  arrowstyling: {
    marginLeft: 10,
  },
  LandStyling: {
    marginLeft: 65,
    fontFamily: Font.semiBold,
    fontSize: 15,
  },
  boxed: {
    marginTop: 50,
  },
  box: {
    width: 323,
    height: 135,
    backgroundColor: 'lightgrey',
    borderRadius: 8,
    marginHorizontal: 20,
    flexDirection: 'row',
    // alignItems:'center',
  },
  Homestyle: {
    width: 85,
    height: 85,
    borderRadius: 8,
    marginLeft: 15,
    marginTop: 27,
  },
  textstyle: {
    marginLeft: 10,
    marginTop: 30,
    fontFamily: Font.semiBold,
    color: '#000000',
    fontSize: 14,
    width: 220,
  },
  textstyling: {
    width: 200,
    fontSize: 10,
    color: '#646464',
    marginLeft: 10,
    fontFamily: Font.regular,
    // backgroundColor:'red',
  },
  dotline: {
    width: '88%',
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    borderStyle: 'dashed',
    marginLeft: 10,
    marginTop: -7,
  },
  Areadetail: {
    flexDirection: 'row',
    alignItems: 'center', //ye align item sai center mai ja raha hai
  },
  areas: {
    color: '#006838',
    fontSize: 9,
    fontFamily: Font.medium,
    marginLeft: 10,
    marginTop: 6,
  },
  acres: {
    color: '#646464',
  },
});
