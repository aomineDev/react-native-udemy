import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'layouts/Account/FormWrapper'

import LoginForm from 'components/Account/Login/LoginForm'
import CreateAccount from 'components/Account/Login/CreateAccount'
import SocialLogin from 'components/Account/Login/SocialLogin'
import Divider from 'components/shared/Divider'
import Toast from 'components/shared/Toast'

import globalStyles from 'assets/styles/globalStyles'

function Login ({ navigation }) {
  const toastRef = useRef()

  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingFacebook, setIsLoadingFacebook] = useState(false)
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)

  function toggleAwaitRequest (value, provider) {
    setIsDisabled(value)

    if (provider === 'facebook') {
      setIsLoadingFacebook(value)
      return
    }

    if (provider === 'google') {
      setIsLoadingGoogle(value)
      return
    }

    setIsLoading(value)
  }

  function redirectTo (route) {
    navigation.navigate(route)
  }

  return (
    <LogoWrapper>
      <FormWrapper>
        <LoginForm
          redirect={() => redirectTo('Account')}
          toggleAwaitRequest={toggleAwaitRequest}
          disabled={isDisabled}
          loading={isLoading}
          toastRef={toastRef}
        />
      </FormWrapper>
      <View style={globalStyles.container}>
        <CreateAccount
          redirect={() => redirectTo('Register')}
        />
      </View>
      <Divider />
      <View style={globalStyles.container}>
        <SocialLogin
          redirect={() => redirectTo('Account')}
          setIsDisabled={setIsDisabled}
          toggleAwaitRequest={toggleAwaitRequest}
          isDisabled={isDisabled}
          isLoadingFacebook={isLoadingFacebook}
          isLoadingGoogle={isLoadingGoogle}
          toastRef={toastRef}
        />
      </View>
      <Toast
        toastRef={toastRef}
        position='top'
      />
    </LogoWrapper>
  )
}

export default withNavigation(Login)
