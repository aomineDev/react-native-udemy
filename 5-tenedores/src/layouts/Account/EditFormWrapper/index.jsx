import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function EditFormWrapper ({ children }) {
  return (
    <View style={styles.formContainer}>
      {children}
    </View>
  )
}
