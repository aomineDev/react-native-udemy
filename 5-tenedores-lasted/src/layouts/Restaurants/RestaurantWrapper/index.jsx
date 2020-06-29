import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function RestaurantWrapper ({ children }) {
  return (
    <View style={styles.viewBody}>
      {children}
    </View>
  )
}
