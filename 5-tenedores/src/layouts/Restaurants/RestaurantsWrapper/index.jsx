import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function RestaurantsWrapper ({ children }) {
  return (
    <View style={styles.viewRestaurants}>
      {children}
    </View>
  )
}
