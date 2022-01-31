import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import CommentText from './commentText'

export default function VulgarityInput(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.block}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons
              name="fruit-cherries"
              color="white"
              size={30}
            />
            <Text style={styles.textOption}>Интерес</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                backgroundColor: props.color1,
                borderRadius: 100,
                width: 15,
                height: 15,
                margin: 5,
              }}
            />
            <View
              style={{
                backgroundColor: props.color2,
                borderRadius: 100,
                width: 15,
                height: 15,
                margin: 5,
              }}
            />
            <View
              style={{
                backgroundColor: props.color3,
                borderRadius: 100,
                width: 15,
                height: 15,
                margin: 5,
              }}
            />
          </View>
        </View>

        <CommentText title="насколько откровенные вопросы могут быть" />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textOption: { color: '#fff', paddingLeft: 20, fontSize: 24 },
})
