import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Card from './card'
import { Ionicons } from '@expo/vector-icons'

export default function Header(props) {
  if (props.headerButton === 1) {
    return (
      <View style={styles.header}>
        <Card style={{ padding: 3, borderColor: '#000' }}>
          <Ionicons name="help" size={28} color="#000" />
        </Card>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={props.onQuestion}>
          <Card style={{ padding: 3 }}>
            <Ionicons name="help" size={28} color="#fff" />
          </Card>
        </TouchableOpacity>
      </View>
    )
  } else if (props.headerButton === 2) {
    return (
      <View style={styles.header}>
        <Card style={{ padding: 3, borderColor: '#000' }}>
          <Ionicons name="help" size={28} color="#000" />
        </Card>
        <Text style={styles.title}>{props.title}</Text>
        <TouchableOpacity onPress={props.onQuestionClose}>
          <Card style={{ padding: 3 }}>
            <Ionicons name="close-outline" size={28} color="#fff" />
          </Card>
        </TouchableOpacity>
      </View>
    )
  } else if (props.headerButton === 3) {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={props.onHeaderBack}>
          <Card style={{ padding: 3 }}>
            <Ionicons name="chevron-back-outline" size={28} color="#fff" />
          </Card>
        </TouchableOpacity>
        <Text style={styles.title}>{props.title}</Text>
        <Card style={{ padding: 3, borderColor: '#000' }}>
          <Ionicons name="help" size={28} color="#000" />
        </Card>
      </View>
    )
  } else {
    return (
      <View style={[styles.header, { justifyContent: 'center' }]}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#74584A',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    letterSpacing: 1,
    fontSize: 18,
    textAlign: 'center',
  },
})
