import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../Components/AppHeader';
import CropInput from '../Components/CropInput';
import AreaUnit from '../Components/AreaUnit';

const Cropsinsure = () => {
  return (
    <View>
       <AppHeader/>
       <CropInput/>
       <AreaUnit/>
    </View>
  )
}

export default Cropsinsure

const styles = StyleSheet.create({})
