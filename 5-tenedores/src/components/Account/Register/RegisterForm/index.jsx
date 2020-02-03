import React, { useState } from 'react'

import { validateAuthFields } from 'utils/Validations/validateFields'
import { registerUser } from 'utils/FireBase/auth'
import { useInputValue } from 'hooks/useInputValue'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function RegisterForm ({ redirect, toastRef }) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const [repeatPassword, setRepeatPassword] = useInputValue('')

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  function validateForm () {
    let validations = validateAuthFields(email, password, repeatPassword)
    let isValid = true

    validations = Object.values(validations)
    validations.some(validation => {
      if (!validation.isValid) {
        toastRef.current.show(validation.message, 1000)
        isValid = false
        return true
      }
    })

    return isValid
  }

  function toggleAwaitRequest (value) {
    setIsDisabled(value)
    setIsLoading(value)
  }

  function handlePress () {
    const isValid = validateForm()

    if (!isValid) return

    toggleAwaitRequest(true)
    registerUser(email, password)
      .then(message => toastRef.current.show(message, 500, () => redirect()))
      .catch(error => {
        toastRef.current.show(error.message, 1000)
        toggleAwaitRequest(false)
      })
  }

  return (
    <>
      <InputForm
        placeholder='Correo Electrónico'
        value={email}
        onChange={setEmail}
        disabled={isDisabled}
        iconName='mail'
      />
      <InputForm
        placeholder='Contraseña'
        value={password}
        onChange={setPassword}
        disabled={isDisabled}
        iconName={nameIcons}
        isPassword
      />
      <InputForm
        placeholder='Repetir contraseña'
        value={repeatPassword}
        onChange={setRepeatPassword}
        disabled={isDisabled}
        iconName={nameIcons}
        isPassword
      />
      <ButtonForm
        title='Únete'
        onPress={handlePress}
        disabled={isDisabled}
        loading={isLoading}
      />
    </>
  )
}
