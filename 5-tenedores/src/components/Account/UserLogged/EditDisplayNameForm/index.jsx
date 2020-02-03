import React, { useState, useEffect } from 'react'

import { useInputValue } from 'hooks/useInputValue'
import { updateProfile } from 'utils/FireBase/user'

import EditFormWrapper from 'layouts/Account/EditFormWrapper'
import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function EditDisplayNameForm ({ value, setReload, setIsVisible, toastRef }) {
  const [displayName, setDisplayName] = useInputValue(value ?? 'Anónimo')

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (errorMessage) setErrorMessage(null)
  }, [displayName])

  async function updateDisplayName () {
    try {
      setIsDisabled(true)
      setIsLoading(true)
      await updateProfile({ displayName })
      toastRef.current.show('Nombre de usuario actualizado')
      setReload(true)
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    } finally {
      setIsVisible(false)
    }
  }

  function handlePress () {
    if (displayName === value) {
      setErrorMessage('El nombre de usuario no ha cambiado')
      return
    }
    if (!displayName) {
      setErrorMessage('El nombre de usuario no puede estar vacio')
      return
    }

    updateDisplayName()
  }

  return (
    <EditFormWrapper>
      <InputForm
        placeholder='Nombre'
        iconName='person'
        value={displayName}
        onChange={setDisplayName}
        disabled={isDisabled}
        errorMessage={errorMessage}
        isForEditForm
      />
      <ButtonForm
        title='Actualizar Nombre'
        onPress={handlePress}
        disabled={isDisabled}
        loading={isLoading}
        isForEditForm
      />
    </EditFormWrapper>
  )
}
