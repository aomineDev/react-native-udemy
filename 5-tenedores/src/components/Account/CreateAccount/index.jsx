import React from 'react'
import { Text } from 'react-native'

import styles from './styles'

const CreateAccount = ({ createAccountHandler }) => (
  <Text style={styles.textRegister}>
    ¿Aún no tienes una cuenta?
    {' '}
    <Text
      style={styles.btnRegister}
      onPress={createAccountHandler}
    >
      Regístrate
    </Text>
  </Text>
)

export default CreateAccount
