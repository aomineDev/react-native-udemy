import React from 'react'

import { validateAuthFields } from 'utils/Validations/validateFields'
import { loginUser } from 'utils/FireBase/auth'
import { useInputValue } from 'hooks/useInputValue'

import Form from 'cfs/AccountScreens/Login/Form'

export default function LoginForm ({
  navigateTo,
  toggleAwaitRequest,
  isDisabled,
  isLoading,
  toastRef
}) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')

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
        toggleAwaitRequest(false)
      })
      .catch(error => {
        toastRef.current.show(error.message, 1000)
        toggleAwaitRequest(false)
      })
  }

  return (
    <Form
      setEmail={setEmail}
      setPassword={setPassword}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onPress={handlePress}
    />
  )
}
