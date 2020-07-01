import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function AddReviewWrapper ({ children }) {
  return (
    <View style={styles.viewAddRestaurantReview}>
      {children}
    </View>
  )
}
