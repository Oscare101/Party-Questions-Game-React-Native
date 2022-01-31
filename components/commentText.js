import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CommentText(props) {
  return <Text style={styles.comment}>{props.title}</Text>
}

const styles = StyleSheet.create({
  comment: {
    color: '#72767d',
    fontSize: 14,
  },
})
