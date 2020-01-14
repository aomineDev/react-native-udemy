import React, { useState } from 'react'
import { View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useInputValue } from '../../../hooks/useInputValue'
import { validateEmail } from '../../../utils/Validation'

import Logo from '../Logo'
import InputForm from '../../Form/InputForm'
import ButtonForm from '../../Form/ButtonForm'

import styles from './styles'

const SignUpForm = ({ onSignUp, onRegistered }) => {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const [repeatPassword, setRepeatPassword] = useInputValue('')
  const [disabled, setDisabled] = useState(false)
  const resultEmailValidate = validateEmail(email)

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  const handleSubmit = async () => {
    if (!email || !password || !repeatPassword) {
      window.alert('Todos los campos son obligatorios')
      return
    }

    if (!resultEmailValidate) {
      window.alert('El email es invalido')
      return
    }

    if (password !== repeatPassword) {
      window.alert('Las contraseñas no son iguales')
      return
    }

    try {
      setDisabled(true)
      await onSignUp(email, password)
      onRegistered()
    } catch (error) {
      window.alert(error)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <KeyboardAwareScrollView>
      <Logo />
      <View style={styles.formContainer}>
        <InputForm
          placeholder='Correo Electrónico'
          value={email}
          onChange={setEmail}
          disabled={disabled}
          iconName='mail'
        />
        <InputForm
          placeholder='Contraseña'
          value={password}
          onChange={setPassword}
          disabled={disabled}
          iconName={nameIcons}
          isPassword
        />
        <InputForm
          placeholder='Repetir contraseña'
          value={repeatPassword}
          onChange={setRepeatPassword}
          disabled={disabled}
          iconName={nameIcons}
          isPassword
        />
        <ButtonForm
          title='Unirse'
          onSubmit={handleSubmit}
          disabled={disabled}
        />
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUpForm
