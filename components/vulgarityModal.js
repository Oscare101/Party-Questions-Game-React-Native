import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import CommentText from './commentText'
import Card from './card'

export default function VulgarityModal(props) {
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.onClick(1)}>
          <Card>
            <View>
              <Text style={[styles.big, { color: '#00bf9a' }]}>Легко</Text>
              <CommentText title="Легкие вопросы, не вызывающие стыда или желания убежать прочь" />
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onClick(2)}>
          <Card>
            <View>
              <Text style={[styles.big, { color: '#f3ca00' }]}>Средне</Text>
              <CommentText
                title="Смешанные, ориентированные для более открытых к общению людей,
                  прийдется раскрыть пару секретиков"
              />
            </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onClick(3)}>
          <Card>
            <View>
              <Text style={[styles.big, { color: '#f05333' }]}>Сложно</Text>
              <CommentText
                title="Максимальная сложность, азартность и откровенность вопросов и
                  заданий{'\n'}Лучше играть пьяными"
              />
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  big: {
    alignSelf: 'center',
    fontSize: 24,
    letterSpacing: 1,
    fontWeight: 'bold',
  },
})
