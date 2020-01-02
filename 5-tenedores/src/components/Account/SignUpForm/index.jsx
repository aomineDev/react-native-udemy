import React from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import Logo from '../Logo'
import InputValue from '../../Form/InputValue'
import ButtonSubmit from '../../Form/ButtonSubmit'
import styles from './styles'

const SignUpForm = () => (
  <KeyboardAwareScrollView>
    <Logo />
    <View style={styles.formContainer}>
      <InputValue
        placeholder='Correo Electrónico'
        iconName='mail'
      />
      <InputValue
        placeholder='Contraseña'
        password
        iconName='visibility-off'
      />
      <InputValue
        placeholder='Repetir contraseña'
        password
        iconName='visibility-off'
      />
      <ButtonSubmit
        title='Unirse'
        handleSubmit={() => window.alert('registrado prro :V')}
      />

    </View>
  </KeyboardAwareScrollView>
)

export default SignUpForm
