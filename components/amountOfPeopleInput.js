import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Card from './card'
import CommentText from './commentText'
import { Ionicons } from '@expo/vector-icons'

export default function AmountOfPeopleInput(props) {
  const [amountOfPeople, setAmountOfPeople] = useState(1)

  return (
    <Card>
      <Text style={styles.title}>Количество человек</Text>
      <View style={styles.buttons}>
        <Card
          style={{
            width: '47%',
            margin: 5,
            opacity: amountOfPeople === 1 ? 1 : 0.3,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.onAmoutOfPeople(1)
              setAmountOfPeople(1)
            }}
          >
            <View style={styles.choice}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="person" size={24} color="#fff" />
                <Ionicons name="person-outline" size={24} color="#fff" />
              </View>

              <Text style={styles.text}>Двое человек</Text>
            </View>
          </TouchableOpacity>
        </Card>
        <Card
          style={{
            width: '47%',
            margin: 5,
            opacity: amountOfPeople === 2 ? 1 : 0.3,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.onAmoutOfPeople(2)
              setAmountOfPeople(2)
            }}
          >
            <View style={[styles.choice, {}]}>
              <View style={{ flexDirection: 'row' }}>
                <Ionicons name="people" size={24} color="#fff" />
                <Ionicons name="people-outline" size={24} color="#fff" />
                <Ionicons name="add" size={24} color="#fff" />
              </View>
              <Text style={styles.text}>Компания</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
      <CommentText title="Выберите один из двух вариантов количества игроков" />
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  choice: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
})
