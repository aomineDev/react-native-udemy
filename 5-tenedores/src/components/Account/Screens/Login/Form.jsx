import React from 'react'

import { validateAuthFields } from 'utils/Validations/validateFields'
import { loginUser } from 'utils/FireBase/auth'
import { useInputValue } from 'hooks/useInputValue'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function Form ({
  navigateTo,
  toggleAwaitRequest,
  disabled,
  loading,
  toastRef
}) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  function validateForm () {
    let validations = validateAuthFields(email, password)
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

  function handlePress () {
    const isValid = validateForm()

    if (!isValid) return

    toggleAwaitRequest(true)
    loginUser(email, password)
      .then(() => {
        navigateTo('account')
      })
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
        onPress={handlePress}
        disabled={disabled}
        loading={loading}
      />
    </>
  )
}
