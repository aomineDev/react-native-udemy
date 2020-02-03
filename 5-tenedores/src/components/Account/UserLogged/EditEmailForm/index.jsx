import React, { useState, useEffect } from 'react'

import { useInputValue } from 'hooks/useInputValue'
import { reloginUser } from 'utils/FireBase/auth'
import { updateEmail } from 'utils/FireBase/user'
import { validateEditEmail, validateEditPassword } from 'utils/Validations/validateFields'

import EditFormWrapper from 'layouts/Account/EditFormWrapper'
import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function EditEmailForm ({ value, setReload, setIsVisible, toastRef }) {
  const [email, setEmail] = useInputValue(value)
  const [password, setPassword] = useInputValue('')

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  useEffect(() => {
    if (errorMessage) setErrorMessage({})
  }, [email, password])

  function toggleAwaitRequest (value) {
    setIsDisabled(value)
    setIsLoading(value)
  }

  function handleUpdateEmail () {
    toggleAwaitRequest(true)
    reloginUser(password)
      .then(() => {
        updateEmail(email)
          .then(message => {
            toastRef.current.show(message)
            setIsVisible(false)
            setReload(true)
          })
          .catch(error => {
            toastRef.current.show(error.message, 1000)
            setIsVisible(false)
          })
      })
      .catch(() => {
        setErrorMessage({ password: 'La contraseña es incorrecta' })
        toggleAwaitRequest(false)
      })
  }

  function handlePress () {
    const emailValidations = validateEditEmail(email, value)

    if (!emailValidations.isValid) {
      setErrorMessage({ email: emailValidations.message })
      return
    }

    const passwordValidations = validateEditPassword(password)

    if (!passwordValidations.isValid) {
      setErrorMessage({ password: passwordValidations.message })
      return
    }

    handleUpdateEmail()
  }

  return (
    <EditFormWrapper>
      <InputForm
        placeholder='Email'
        iconName='mail'
        value={email}
        onChange={setEmail}
        disabled={isDisabled}
        errorMessage={errorMessage.email}
        isForEditForm
      />
      <InputForm
        placeholder='Contraseña'
        iconName={nameIcons}
        value={password}
        onChange={setPassword}
        disabled={isDisabled}
        errorMessage={errorMessage.password}
        isPassword
        isForEditForm
      />
      <ButtonForm
        title='Actualizar Email'
        onPress={handlePress}
        disabled={isDisabled}
        loading={isLoading}
        isForEditForm
      />
    </EditFormWrapper>
  )
}
