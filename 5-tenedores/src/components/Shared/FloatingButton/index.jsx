import React from 'react'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function FloatingButton (props) {
  return (
    <Icon
      {...props}
      reverse
      containerStyle={styles.btnContainer}
    />
  )
}
