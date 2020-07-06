import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import CenterWrapper from 'wrappers/CenterWrapper'

import styles from './styles'

export default function UnloggedUser ({ text }) {
  const navigation = useNavigation()

  function handlePess () {
    navigation.navigate('account', { screen: 'login' })
  }
  return (
    <CenterWrapper>
      <View style={styles.viewUnloggedUser}>
        <Icon
          name='sentiment-very-dissatisfied'
          color='grey'
          size={50}
        />
        <Text
          style={styles.unloggedUserText}
          onPress={handlePess}
        >
          {text}{'\n'}
          <Text style={styles.navigateToLogin}>Hazlo AQUÍ!</Text>
        </Text>
      </View>
    </CenterWrapper>
  )
}
