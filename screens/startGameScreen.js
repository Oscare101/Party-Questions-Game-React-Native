import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native'

import {} from '@expo/vector-icons'

import Header from '../components/header'
import Card from '../components/card'
import VulgarityInput from '../components/vulgarityInput'
import CommentText from '../components/commentText'
import VulgarityModal from '../components/vulgarityModal'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function StartGameScreen() {
  const [vulgarityModalVisible, setVulgarityModalVisible] = useState(false)
  const [vulgarity, setVulgarity] = useState(0)

  const [color1, setColor1] = useState('grey')
  const [color2, setColor2] = useState('grey')
  const [color3, setColor3] = useState('grey')

  function VulgarityHandler(point) {
    setVulgarity(point)
    setVulgarityModalVisible(false)
    switch (point) {
      case 0:
        setColor1('grey')
        setColor2('grey')
        setColor3('grey')
        break
      case 1:
        setColor1('#00bf9a')
        setColor2('grey')
        setColor3('grey')
        break
      case 2:
        setColor1('#f3ca00')
        setColor2('#f3ca00')
        setColor3('grey')
        break
      case 3:
        setColor1('#f05333')
        setColor2('#f05333')
        setColor3('#f05333')
    }
  }

  return (
    <View style={styles.container}>
      <VulgarityModal
        visible={vulgarityModalVisible}
        onClick={(point) => VulgarityHandler(point)}
      />
      <Header title="Party Questions Game" />
      <View style={styles.inputBlock}>
        <View>
          <Card>
            <VulgarityInput
              color1={color1}
              color2={color2}
              color3={color3}
              vulgarityLevel={vulgarity}
              onPress={() => setVulgarityModalVisible(true)}
            />
          </Card>
        </View>

        <View>
          <Card>
            <TouchableOpacity>
              <View style={styles.buttonStart}>
                <Text style={styles.textStart}>Начать Игру</Text>
              </View>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  inputBlock: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  textOption: {
    color: '#fff',
  },
  buttonStart: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  textStart: {
    color: '#fff',
    fontSize: 24,
  },
})
