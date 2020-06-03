import React from 'react'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function AddFloatingButton ({ navigateTo, destiny }) {
  return (
    <Icon
      reverse
      name='add'
      color='#00a680'
      onPress={() => navigateTo(destiny)}
      containerStyle={styles.btnContainer}
    />
  )
}
