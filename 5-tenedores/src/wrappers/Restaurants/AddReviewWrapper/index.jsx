import React from 'react'
import { ScrollView } from 'react-native'

import styles from './styles'

export default function AddReviewWrapper ({ children }) {
  return (
    <ScrollView style={styles.viewAddReview} contentContainerStyle={{ flexGrow: 1 }}>
      {children}
    </ScrollView>
  )
}
