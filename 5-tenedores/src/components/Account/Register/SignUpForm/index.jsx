import React, { useState } from 'react'

import { useInputValue } from '../../../../hooks/useInputValue'
import { validateEmail } from '../../../../utils/validation'

import InputForm from '../../../Form/InputForm'
import ButtonForm from '../../../Form/ButtonForm'

export default function SignUpForm ({ onSignUp, onRegister, toastRef }) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const [repeatPassword, setRepeatPassword] = useInputValue('')

  const [disabled, setDisabled] = useState(false)

  const resultEmailValidate = validateEmail(email)

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  async function handleSubmit () {
    if (!email || !password || !repeatPassword) {
      toastRef.current.show('Todos los campos son obligatorios', 1000)
      return
    }

    if (!resultEmailValidate) {
      toastRef.current.show('El email es invalido', 1000)
      return
    }

    if (password !== repeatPassword) {
      toastRef.current.show('Las contraseñas no son iguales', 1000)
      return
    }

    setDisabled(true)

    onSignUp(email, password)
      .then(message => toastRef.current.show(message, 500, () => { onRegister() }))
      .catch(error => {
        toastRef.current.show(error.message, 1000)
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
        title='Únete'
        onSubmit={handleSubmit}
        disabled={disabled}
      />
    </>
  )
}
