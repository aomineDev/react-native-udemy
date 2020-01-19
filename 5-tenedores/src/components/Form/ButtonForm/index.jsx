import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

const ButtonForm = ({ title, onSubmit, disabled, loading }) => (
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

export default ButtonForm
