import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function SignOutButton (props) {
  return (
    <Button
      {...props}
      buttonStyle={styles.btn}
      titleStyle={styles.title}
    />
  )
}
