import React, { useState, useRef } from 'react'
import { View } from 'react-native'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'layouts/Account/FormWrapper'

import Form from 'components/Account/Screens/Login/Form'
import CreateAccount from 'components/Account/Screens/Login/CreateAccount'
import SocialLogin from 'components/Account/Screens/Login/SocialLogin'
import Divider from 'components/Shared/Divider'
import Toast from 'components/Shared/Toast'

import globalStyles from 'assets/styles/globalStyles'

export default function Login ({ navigation }) {
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

  function navigateTo (destiny) {
    navigation.navigate(destiny)
  }

  return (
    <LogoWrapper>
      <FormWrapper>
        <Form
          navigateTo={navigateTo}
          toggleAwaitRequest={toggleAwaitRequest}
          disabled={isDisabled}
          loading={isLoading}
          toastRef={toastRef}
        />
      </FormWrapper>
      <View style={globalStyles.container}>
        <CreateAccount
          onPress={() => navigateTo('register')}
        />
      </View>
      <Divider />
      <View style={globalStyles.container}>
        <SocialLogin
          navigateTo={navigateTo}
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
