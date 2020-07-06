import React from 'react'
import { Text } from 'react-native'
import { Icon } from 'react-native-elements'

import CenterWrapper from 'wrappers/CenterWrapper'

import styles from './styles'

export default function NoContent ({ text }) {
  return (
    <CenterWrapper>
      <Icon
        name='sentiment-dissatisfied'
        color='grey'
        size={50}
      />
      <Text style={styles.noContentText}>{text}</Text>
    </CenterWrapper>
  )
}
