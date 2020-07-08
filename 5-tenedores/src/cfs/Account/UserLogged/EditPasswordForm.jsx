import React, { useState, useEffect } from 'react'

import { useInputValue } from 'hooks/useInputValue'
import { reloginUser } from 'utils/FireBase/auth'
import { validateEditPassword } from 'utils/Validations/validateFields'
import { updatePassword } from 'utils/FireBase/specifics/user'

import EditFormWrapper from 'wrappers/Account/EditFormWrapper'
import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function EditPaswordForm ({ setIsVisible, toastRef }) {
  const [password, setPassword] = useInputValue('')
  const [newPassword, setNewPassword] = useInputValue('')
  const [repeatNewPassword, setRepeatNewPassword] = useInputValue('')

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState({})

  useEffect(() => {
    if (Object.keys(errorMessage).length) setErrorMessage({})
  }, [password, newPassword, repeatNewPassword])

  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  function toggleAwaitRequest (value) {
    setIsDisabled(value)
    setIsLoading(value)
  }

  function handleChangePassword () {
    toggleAwaitRequest(true)
    reloginUser(password)
      .then(() => {
        updatePassword(newPassword)
          .then(message => {
            toastRef.current.show(message)
            setIsVisible(false)
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
    const { isValid, fields, message } = validateEditPassword(password, newPassword, repeatNewPassword)

    if (!isValid) {
      if (fields.length === 2) {
        setErrorMessage({ newPassword: message, repeatNewPassword: message })
        return
      }

      fields.forEach(field => {
        switch (field) {
          case 'password':
            setErrorMessage({ password: message })
            break
          case 'newPassword':
            setErrorMessage({ newPassword: message })
            break
          case 'repeatNewPassword':
            setErrorMessage({ ...errorMessage, repeatNewPassword: message })
            break
        }
      })
      return
    }

    handleChangePassword()
  }

  return (
    <EditFormWrapper>
      <InputForm
        placeholder='Contraseña'
        iconName={nameIcons}
        onChange={setPassword}
        disabled={isDisabled}
        errorMessage={errorMessage.password}
        isPassword
        isForEditForm
      />
      <InputForm
        placeholder='Nueva contraseña'
        iconName={nameIcons}
        onChange={setNewPassword}
        disabled={isDisabled}
        errorMessage={errorMessage.newPassword}
        isPassword
        isForEditForm
      />
      <InputForm
        placeholder='Repetir nueva contraseña'
        iconName={nameIcons}
        onChange={setRepeatNewPassword}
        disabled={isDisabled}
        errorMessage={errorMessage.repeatNewPassword}
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
