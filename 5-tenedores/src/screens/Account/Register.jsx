import React, { useRef } from 'react'
import { withNavigation } from 'react-navigation'

import { onSignUp } from '../../utils/FireBase/auth'

import LogoWrapper from '../../layouts/Account/LogoWrapper'
import FormWrapper from '../../layouts/Account/FormWrapper'

import SignUpForm from '../../components/Account/Register/SignUpForm'
import Toast from '../../components/shared/Toast'

const Register = ({ navigation }) => {
  const toastRef = useRef()

  return (
    <LogoWrapper>
      <FormWrapper>
        <SignUpForm
          onSignUp={onSignUp}
          onRegister={() => navigation.navigate('Account')}
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
