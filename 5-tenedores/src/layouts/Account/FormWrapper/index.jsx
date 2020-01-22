import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function SignUpForm ({ children }) {
  return (
    <View style={styles.formContainer}>
      {children}
    </View>
  )
}
