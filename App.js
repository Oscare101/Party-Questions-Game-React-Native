import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'

import GameScreen from './screens/gameScreen'
import StartGameScreen from './screens/startGameScreen'

export default function App(props) {
  const [isGame, setIsGame] = useState(false)
  const [vulgarity, setVulgarity] = useState(1)
  const [amountOfPeople, setAmountOfPeople] = useState(1)

  let content = (
    <StartGameScreen
      onStartGame={(vulgarityOutput, amountOfPeopleOutput) => {
        setVulgarity(vulgarityOutput)
        setAmountOfPeople(amountOfPeopleOutput)
        setIsGame(true)
      }}
    />
  )

  if (isGame) {
    content = (
      <GameScreen
        vulgarity={vulgarity}
        amountOfPeople={amountOfPeople}
        GameOver={() => setIsGame(false)}
      />
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})
