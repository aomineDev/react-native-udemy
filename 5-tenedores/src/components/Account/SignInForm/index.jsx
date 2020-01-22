import React from 'react'

import { useInputValue } from '../../../hooks/useInputValue'
import { validateEmail } from '../../../utils/Validation'

import InputForm from '../../Form/InputForm'
import ButtonForm from '../../Form/ButtonForm'

export default function SignInForm ({ onSignIn, onLogged, disabled, loading, handleSignIn, toastRef }) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const resultEmailValidate = validateEmail(email)

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]
  const handleSubmit = async () => {
    if (!email || !password) {
      toastRef.current.show('Todos los campos son obligatorios')
      return
    }

    if (!resultEmailValidate) {
      toastRef.current.show('El email es invalido')
      return
    }

    handleSignIn(true)
    onSignIn(email, password)
      .then(() => onLogged())
      .catch(error => {
        toastRef.current.show(error.message)
        handleSignIn(false)
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
      <ButtonForm
        title='Iniciar Sesión'
        onSubmit={handleSubmit}
        disabled={disabled}
        loading={loading}
      />
    </>
  )
}
