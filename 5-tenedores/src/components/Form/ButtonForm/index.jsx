import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function ButtonForm (props) {
  return (
    <Button
      {...props}
      containerStyle={styles.btnContainerRegister}
      buttonStyle={styles.btnRegister}
      disabledStyle={styles.btnRegisterDisabled}

    />
  )
}
