import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

const CreateAccount = () => (
  <Text style={styles.textRegister}>
    ¿Aún no tienes una cuenta?
    {' '}
    <Text
      style={styles.btnRegister}
      onPress={() => window.alert('Navegando al formulario de registro')}
    >
      Regístrate
    </Text>
  </Text>
)

export default CreateAccount
