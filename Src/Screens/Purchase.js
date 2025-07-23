import { View } from 'react-native';
import React from 'react';
import PurchaseComponent from './PurchaseComponent';

const Buying = () => {
  return (
    <View>
      <PurchaseComponent
       Image={require('../Screens/coca.jpg')}
        title="Stick Class Dispersing and adhesive"
        price="RS.2800"
      />
    </View>
  );
};

export default Buying;
