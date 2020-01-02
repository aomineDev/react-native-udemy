import React from 'react'
import { Button } from 'react-native-elements'

import styles from './styles'

const ButtonSubmit = ({ title, handleSubmit }) => (
  <Button
    title={title}
    containerStyle={styles.btnContainerRegister}
    buttonStyle={styles.btnRegister}
    onPress={handleSubmit}
  />
)

export default ButtonSubmit
