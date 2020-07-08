import React from 'react'
import { Icon } from 'react-native-elements'

import styles from './styles'

export default function FloatingButton ({ backgroundColor, ...props }) {
  return (
    <Icon
      {...props}
      size={32}
      underlayColor='transparent'
      containerStyle={{ ...styles.containerIcon, backgroundColor }}
    />
  )
}
