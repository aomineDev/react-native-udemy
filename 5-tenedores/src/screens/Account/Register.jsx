import React, { useState, useRef } from 'react'
import Toast from 'react-native-easy-toast'
import { withNavigation } from 'react-navigation'

import { useInputValue } from '../../hooks/useInputValue'
import { onSignUp } from '../../utils/FireBaseActions'
import { validateEmail } from '../../utils/Validation'

import LogoWrapper from '../../layouts/Account/LogoWrapper'
import FormWrapper from '../../layouts/Account/FormWrapper'
import InputForm from '../../components/Form/InputForm'
import ButtonForm from '../../components/Form/ButtonForm'

const Register = ({ navigation }) => {
  const toastRef = useRef()

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
      navigation.navigate('Account')
    } catch (error) {
      window.alert(error)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <LogoWrapper>
      <FormWrapper>
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
      </FormWrapper>
      <Toast
        ref={toastRef}
        position='center'
        opacity={0.5}
      />
    </LogoWrapper>
  )
}

export default withNavigation(Register)
