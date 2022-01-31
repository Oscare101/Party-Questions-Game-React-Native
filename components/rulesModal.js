import React from 'react'
import { StyleSheet, Text, View, Modal, ScrollView } from 'react-native'

import Header from './header'
import Card from './card'
import CommentText from './commentText'

export default function RulesModal(props) {
  return (
    <Modal visible={props.rulesVisible} animationType="slide">
      <View style={styles.container}>
        <Header
          onQuestionClose={props.onQuestionClose}
          headerButton={2}
          title="Правила игры"
        />
        <ScrollView>
          <View style={styles.rulesBlock}>
            <Card>
              <Text style={styles.title}>В чем задумка?</Text>
              <Text style={styles.text}>
                Игра предназначена для развлечения компаний любого количества
                человек.
              </Text>
              <CommentText title="Для малых и большик компаний" />
            </Card>
            <Card>
              <Text style={styles.title}>Как играть?</Text>
              <Text style={styles.text}>
                - Для двух человек:{'\n'}Каждый игрок поочереди читает карточку
                человеку напротив. На карточке может быть вопрос или задание,
                которые надо будет выполнять одному или обоим игрокам.{'\n'}
                (Наказания, за отказ выполнять задания на карточке, можно
                придумать любое, например: пить)
                {'\n'}- Для компании:{'\n'}Каждый поочереди читает карточку
                остольным игрокам и выполняет написанное на ней.
              </Text>
              <CommentText title="Задания на карточке зависят от уровня 'Интереса', который вы выберите, убедитесь, что каждый игрок, согласен играть с данным уровнем, который влияет на откровенность вопросов и заданий" />
            </Card>
            <Card>
              <Text style={styles.title}>Что такое интерес?</Text>
              <Text style={styles.text}>
                Интерес - то, насколько откровенные задания и вопросы будут
                попадаться вам в карточках. Настоятельно рекомендуем вам сообща
                согласовать этот показатель.{'\n'}- Для примера:{'\n'}В{' '}
                <Text style={{ color: '#00bf9a' }}>Зеленом </Text>
                уровне вам будут попадаться вопросы про хобби, интересы и
                задания, чтоб лучше узнать друг друга и познакомиться.{'\n'}
                <Text style={{ color: '#f3ca00' }}>Желтый</Text> уровень
                подойдет уже хорошим знакомым или компании людей, которая
                открыта и не стесняется друг друга. {'\n'}Про
                <Text style={{ color: '#f05333' }}> Красный</Text> уровень автор
                предпочел умолчать, чтоб это был сюрприз. Лишь предупреждаю, что
                к нему надо быть готовым)
              </Text>
              <CommentText title="Так же небольшое описание каждого уровня находится в окне выбора Интереса" />
            </Card>
          </View>
        </ScrollView>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  rulesBlock: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})
