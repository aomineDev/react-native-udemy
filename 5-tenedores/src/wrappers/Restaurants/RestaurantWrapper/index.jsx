import React from 'react'
import { ScrollView } from 'react-native'

import styles from './styles'

export default function RestauransWrapper ({ children }) {
  return (
    <ScrollView style={styles.viewRestaurant} contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  )
}
