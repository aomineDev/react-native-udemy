import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

export default function CreateAccount ({ redirect }) {
  function handlePress () {
    redirect()
  }

  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes una cuenta?
      {' '}
      <Text
        style={styles.btnRegister}
        onPress={handlePress}
      >
        Regístrate
      </Text>
    </Text>
  )
}
