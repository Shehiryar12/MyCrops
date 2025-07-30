import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Settings</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Newscreen')}>
        <Text style={{ color: 'white' }}>Go to News</Text> 
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    width: 120,
    height: 40,
    borderRadius: 7,
   
  }
})
