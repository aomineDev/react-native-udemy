import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

export default function LoaderComponent () {
  return (
    <View style={styles.viewLoader}>
      <ActivityIndicator size='large' />
    </View>
  )
}
