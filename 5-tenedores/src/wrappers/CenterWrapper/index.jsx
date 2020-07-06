import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function CenterWrapper ({ children }) {
  return (
    <View style={styles.viewCenterWrapper}>
      {children}
    </View>
  )
}
