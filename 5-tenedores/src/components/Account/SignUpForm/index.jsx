import React, { useState } from 'react'

import { useInputValue } from '../../../hooks/useInputValue'
import { validateEmail } from '../../../utils/Validation'

import InputForm from '../../Form/InputForm'
import ButtonForm from '../../Form/ButtonForm'

const SignUpForm = ({ onSignUp, onRegister, toastRef }) => {
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
      toastRef.current.show('Todos los campos son obligatorios')
      return
    }

    if (!resultEmailValidate) {
      toastRef.current.show('El email es invalido')
      return
    }

    if (password !== repeatPassword) {
      toastRef.current.show('Las contraseñas no son iguales')
      return
    }

    setDisabled(true)
    onSignUp(email, password)
      .then(message => toastRef.current.show(message, 500, () => { onRegister() }))
      .catch(error => {
        toastRef.current.show(error.message)
        setDisabled(false)
      })
  }

  return (
    <>
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
    </>
  )
}

export default SignUpForm
