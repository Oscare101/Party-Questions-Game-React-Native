import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

import StartGameScreen from './screens/startGameScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <StartGameScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
