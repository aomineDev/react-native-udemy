import React from 'react'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function AddFloatingButton ({ navigateTo }) {
  return (
    <Icon
      reverse
      name='add'
      color='#00a680'
      onPress={navigateTo}
      containerStyle={styles.btnContainer}
    />
  )
}
