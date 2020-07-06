import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function Wrapper ({ children }) {
  return (
    <View style={styles.viewWrapper}>
      {children}
    </View>
  )
}
