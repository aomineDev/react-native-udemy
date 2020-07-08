import React from 'react'
import { ScrollView } from 'react-native'

import styles from './styles'

export default function ScrollViewWrapper ({ children }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  )
}
