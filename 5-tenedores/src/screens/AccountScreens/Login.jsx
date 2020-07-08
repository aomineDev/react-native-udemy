import React, { useState, useRef } from 'react'
import * as firebase from 'firebase'

import LogoWrapper from 'layouts/Account/LogoWrapper'
import FormWrapper from 'wrappers/Account/FormWrapper'

import Form from 'fdc/AccountScreens/Login/Form'
import SocialLogin from 'fdc/AccountScreens/Login/SocialLogin'
import CreateAccount from 'cfs/AccountScreens/Login/CreateAccount'
import Divider from 'components/Divider'
import Toast from 'components/Shared/Toast'

export default function Login ({ navigation }) {
  firebase.auth().onAuthStateChanged(user => {
    user && navigateTo('account')
  })

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
          isDisabled={isDisabled}
          isLoading={isLoading}
          toastRef={toastRef}
        />
      </FormWrapper>
      <CreateAccount
        onPress={() => navigateTo('register')}
      />
      <Divider />
      <SocialLogin
        navigateTo={navigateTo}
        setIsDisabled={setIsDisabled}
        toggleAwaitRequest={toggleAwaitRequest}
        isDisabled={isDisabled}
        isLoadingFacebook={isLoadingFacebook}
        isLoadingGoogle={isLoadingGoogle}
        toastRef={toastRef}
      />
      <Toast
        toastRef={toastRef}
        position='top'
      />
    </LogoWrapper>
  )
}
