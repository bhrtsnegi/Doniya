import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'

export default function Candidates() {
  return (
    <View>
        <StatusBar translucent barStyle={'dark-content'}/>
      <Text>Candidates</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})