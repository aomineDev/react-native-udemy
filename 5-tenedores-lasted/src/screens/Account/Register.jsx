import React, { useRef } from 'react'
import { withNavigation } from 'react-navigation'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'layouts/Account/FormWrapper'

import Form from 'components/Account/Register/Form'
import Toast from 'components/Shared/Toast'

function Register ({ navigation }) {
  const toastRef = useRef()

  function navigateTo () {
    navigation.navigate('Account')
  }

  return (
    <LogoWrapper>
      <FormWrapper>
        <Form
          navigateTo={navigateTo}
          toastRef={toastRef}
        />
      </FormWrapper>
      <Toast
        toastRef={toastRef}
        position='top'
      />
    </LogoWrapper>
  )
}

export default withNavigation(Register)
