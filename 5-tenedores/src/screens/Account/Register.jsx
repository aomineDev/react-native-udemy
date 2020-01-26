import React, { useRef } from 'react'
import { withNavigation } from 'react-navigation'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'layouts/Account/FormWrapper'

import RegisterForm from 'components/Account/Register/RegisterForm'
import Toast from 'components/shared/Toast'

function Register ({ navigation }) {
  const toastRef = useRef()

  return (
    <LogoWrapper>
      <FormWrapper>
        <RegisterForm
          redirect={() => navigation.navigate('Account')}
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
