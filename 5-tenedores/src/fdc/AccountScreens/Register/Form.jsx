import React, { useState } from 'react'

import { validateAuthFields } from 'utils/Validations/validateFields'
import { registerUser } from 'utils/FireBase/auth'
import { useInputValue } from 'hooks/useInputValue'

import Form from 'cfs/AccountScreens/Register/Form'

export default function RegisterForm ({ navigateTo, toastRef }) {
  const [email, setEmail] = useInputValue('')
  const [password, setPassword] = useInputValue('')
  const [repeatPassword, setRepeatPassword] = useInputValue('')

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
      .then(message => toastRef.current.show(message, 500, () => navigateTo()))
      .catch(error => {
        toastRef.current.show(error.message, 1000)
        toggleAwaitRequest(false)
      })
  }

  return (
    <Form
      setEmail={setEmail}
      setPassword={setPassword}
      setRepeatPassword={setRepeatPassword}
      isDisabled={isDisabled}
      isLoading={isLoading}
      onPress={handlePress}
    />
  )
}
