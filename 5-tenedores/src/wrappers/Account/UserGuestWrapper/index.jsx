import React from 'react'
import { View } from 'react-native'

import styles from './styles'

export default function UserGuestWrapper ({ children }) {
  return (
    <View
      style={styles.viewUserGuest}
      centerContent
    >
      {children}
    </View>
  )
}
