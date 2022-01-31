import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#74584A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    letterSpacing: 1,
    fontSize: 18,
  },
})
