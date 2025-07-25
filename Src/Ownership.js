import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Font } from './Constant/Fonts';
import OnweshipComponent from './OnweshipComponent';

const Ownership = () => {
  return (
    <OnweshipComponent
      tite="Land Area Ownership "
      heading="Land Area Ownership"
      place="Chak 45, Toba Tek Singh, Faisalabad, Punjab, Pakistan"
      area="10Acres "
      certificate="View Certificate"
    />
  );
};

export default Ownership;

const styles = StyleSheet.create({});
