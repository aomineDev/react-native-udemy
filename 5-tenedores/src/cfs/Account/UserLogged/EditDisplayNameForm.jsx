import React, { useState, useEffect } from 'react'

import { useInputValue } from 'hooks/useInputValue'
import { updateDisplayName } from 'utils/FireBase/specifics/user'
import { validateEditDisplayName } from 'utils/Validations/validateFields'

import EditFormWrapper from 'wrappers/Account/EditFormWrapper'
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

  async function handleUpdateDisplayName () {
    try {
      setIsDisabled(true)
      setIsLoading(true)
      const message = await updateDisplayName({ displayName })
      toastRef.current.show(message)
      setReload(true)
    } catch (error) {
      toastRef.current.show(error.message, 1000)
    } finally {
      setIsVisible(false)
    }
  }

  function handlePress () {
    const { isValid, message } = validateEditDisplayName(displayName, value)

    if (!isValid) {
      setErrorMessage(message)
      return
    }

    handleUpdateDisplayName()
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
