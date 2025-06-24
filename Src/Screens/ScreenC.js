import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  NavigationContext,
  useNavigation,
} from '@react-navigation/native';

const ScreenC = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>ScreenC</Text>

      <Button title={'Going to screen one'} onPress={() => navigation.pop(2)} />
    </View>
  );
};

export default ScreenC;

const styles = StyleSheet.create({});
