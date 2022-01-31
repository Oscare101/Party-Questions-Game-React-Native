import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#74584A',
    borderRadius: 10,
    margin: 10,
  },
})
