import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default function CreateAccount ({ onPress }) {
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      {' '}
      <Text
        style={styles.btnRegister}
        onPress={onPress}
      >
        Regístrate
      </Text>
    </Text>
  )
}
