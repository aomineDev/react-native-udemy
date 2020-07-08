import React from 'react'

import InputForm from 'components/Form/InputForm'
import ButtonForm from 'components/Form/ButtonForm'

export default function Form ({
  setEmail,
  setPassword,
  setRepeatPassword,
  isDisabled,
  isLoading,
  ...props
}) {
  const nameIcons = [
    'visibility-off',
    'visibility'
  ]

  return (
    <>
      <InputForm
        placeholder='Correo Electrónico'
        onChange={setEmail}
        disabled={isDisabled}
        iconName='mail'
      />
      <InputForm
        placeholder='Contraseña'
        onChange={setPassword}
        disabled={isDisabled}
        iconName={nameIcons}
        isPassword
      />
      <InputForm
        placeholder='Repetir contraseña'
        onChange={setRepeatPassword}
        disabled={isDisabled}
        iconName={nameIcons}
        isPassword
      />
      <ButtonForm
        title='Únete'
        disabled={isDisabled}
        loading={isLoading}
        {...props}
      />
    </>
  )
}
