import React from 'react'

import { useInputValue } from '../../../../hooks/useInputValue'
import { validateEmail } from '../../../../utils/validation'

import InputForm from '../../../Form/InputForm'
import ButtonForm from '../../../Form/ButtonForm'

export default function SignInForm ({ onSignIn, onLogged, disabled, loading, handleSignIn, toastRef }) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const resultEmailValidate = validateEmail(email)

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  async function handleSubmit () {
    if (!email || !password) {
      toastRef.current.show('Todos los campos son obligatorios', 1000)
      return
    }

    if (!resultEmailValidate) {
      toastRef.current.show('El email es invalido', 1000)
      return
    }

    handleSignIn(true)

    onSignIn(email, password)
      .then(() => onLogged())
      .catch(error => {
        toastRef.current.show(error.message, 1000)
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
