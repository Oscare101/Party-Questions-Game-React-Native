import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Header from '../components/header'
import Card from '../components/card'
import cards from '../cards.json'
import CommentText from '../components/commentText'

function renderListItem(itemData) {
  return (
    <Card key={itemData}>
      <Text style={styles.question}>{itemData}</Text>
    </Card>
  )
}

export default function GameScreen(props) {
  const [questions, setQuestions] = useState([])
  const [numberOfQuestion, setNumberOfQuestion] = useState(0)
  const [previousCardsModal, setPreviousCardsModal] = useState(false)
  const [pastCards, setPastCards] = useState([])
  const [nextCardDisable, setNextCardDisable] = useState(false)

  useEffect(() => {
    let randomList = cards[props.amountOfPeople][props.vulgarity].sort(
      () => Math.random() - 0.5
    )
    setQuestions(randomList)
  }, [props.vulgarity])

  let lastCard

  if (nextCardDisable) {
    lastCard = (
      <Card>
        <TouchableOpacity onPress={props.GameOver}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={styles.gameOver}>На Главное меню</Text>
            <CommentText title="Вы просмотрели все карточки" />
          </View>
        </TouchableOpacity>
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Header
        headerButton={3}
        title="Игра вопросы для вечеринок"
        onHeaderBack={props.GameOver}
      />
      <View style={styles.gameBlock}>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          <Card>
            <TouchableOpacity
              disabled={nextCardDisable}
              onPress={() => {
                if (numberOfQuestion < questions.length - 2) {
                  setNumberOfQuestion(numberOfQuestion + 1)
                  setPastCards((PastCards) => [
                    ...PastCards,
                    questions[numberOfQuestion],
                  ])
                } else if (numberOfQuestion === questions.length - 2) {
                  console.log(numberOfQuestion, questions.length, '00000000000')
                  setNumberOfQuestion(numberOfQuestion + 1)
                  setPastCards((PastCards) => [
                    ...PastCards,
                    questions[numberOfQuestion],
                  ])
                  setNextCardDisable(true)
                } else {
                  setNextCardDisable(true)
                }
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  opacity: nextCardDisable === true ? 0.3 : 1,
                }}
              >
                <Text style={styles.title}>Следюющая карточка</Text>
                <Ionicons name="chevron-forward" size={28} color="#fff" />
              </View>
            </TouchableOpacity>
          </Card>
          <Text style={styles.aboveCardText}>Карточка:</Text>
          <Card>
            <Text style={styles.question}>{questions[numberOfQuestion]}</Text>
          </Card>
          {lastCard}
        </View>

        <Card>
          <TouchableOpacity
            onPress={() => {
              setPreviousCardsModal(true)
            }}
          >
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <Text style={styles.title}>Предыдущие карточки</Text>
              <Ionicons name="newspaper-outline" size={28} color="#fff" />
            </View>
          </TouchableOpacity>

          <Modal visible={previousCardsModal} animationType="slide">
            <View style={styles.container}>
              <Header
                onQuestionClose={() => setPreviousCardsModal(false)}
                headerButton={2}
                title="Предыдущие карточки"
              />
              <ScrollView>
                <View style={styles.cardsBlock}>
                  <ScrollView contentContainerStyle={styles.list}>
                    {pastCards.map((card) => renderListItem(card))}
                  </ScrollView>
                </View>
              </ScrollView>
            </View>
          </Modal>
        </Card>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gameBlock: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  question: {
    color: '#fff',
    fontSize: 20,
  },
  title: {
    color: '#fff',
    letterSpacing: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  list: {
    flexGrow: 1,
    //alignItems: 'center',
    justifyContent: 'flex-end',
  },
  aboveCardText: {
    color: '#aaa',
    textAlign: 'center',
    fontSize: 24,
    letterSpacing: 2,
  },
  gameOver: {
    color: '#fff',
    fontSize: 24,
  },
})
