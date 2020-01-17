import React from 'react'
import { View } from 'react-native'

import styles from './styles'

const SignUpForm = ({ children }) => (
  <View style={styles.formContainer}>
    {children}
  </View>
)

export default SignUpForm
