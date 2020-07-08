import React from 'react'
import { Text, View } from 'react-native'

import globalStyles from 'assets/styles/globalStyles'
import styles from './styles'

export default function CreateAccount (props) {
  return (
    <View style={globalStyles.container}>
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
    </View>
  )
}
