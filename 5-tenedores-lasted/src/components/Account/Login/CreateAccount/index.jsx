import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default function CreateAccount (props) {
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      {' '}
      <Text
        {...props}
        style={styles.btnRegister}
      >
        Regístrate
      </Text>
    </Text>
  )
}
