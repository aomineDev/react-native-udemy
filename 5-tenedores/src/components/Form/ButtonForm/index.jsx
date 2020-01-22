import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

export default function ButtonForm ({ title, onSubmit, disabled, loading }) {
  return (
    <Button
      containerStyle={styles.btnContainerRegister}
      buttonStyle={styles.btnRegister}
      title={title}
      onPress={onSubmit}
      disabled={disabled}
      disabledStyle={styles.btnRegisterDisabled}
      loading={loading}
    />
  )
}
