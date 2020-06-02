import React from 'react'

import {
  loginUserWithFacebook,
  LoginUserWithFacebookCredentials,
  loginUserWithGoogle,
  LoginUserWithGoogleCredentials
} from 'utils/FireBase/socialAuth'

import SocialLoginButton from './SocialLoginButton'

export default function SocialLogin ({
  navigateTo,
  setIsDisabled,
  toggleAwaitRequest,
  isDisabled,
  isLoadingFacebook,
  isLoadingGoogle,
  toastRef
}) {
  async function handleFacebookButtonPress () {
    try {
      setIsDisabled(true)
      const { type, token } = await loginUserWithFacebook()

      if (type === 'success') {
        toggleAwaitRequest(true, 'facebook')
        await LoginUserWithFacebookCredentials(token)
        navigateTo('Account')
      } else {
        toggleAwaitRequest(false, 'facebook')
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
      toggleAwaitRequest(false, 'facebook')
    }
  }

  async function handleGooleButtonPress () {
    try {
      setIsDisabled(true)
      const { type, idToken, accessToken } = await loginUserWithGoogle()

      if (type === 'success') {
        toggleAwaitRequest(true, 'google')
        await LoginUserWithGoogleCredentials(idToken, accessToken)
        navigateTo('Account')
      } else {
        toggleAwaitRequest(false, 'google')
      }
    } catch (error) {
      toastRef.current.show(error.message, 1000)
      toggleAwaitRequest(false, 'google')
    }
  }

  return (
    <>
      <SocialLoginButton
        title='Iniciar Sesión con Facebook'
        type='facebook'
        disabled={isDisabled}
        loading={isLoadingFacebook}
        onPress={handleFacebookButtonPress}
      />
      <SocialLoginButton
        title='Iniciar Sesión con Google'
        type='google'
        disabled={isDisabled}
        loading={isLoadingGoogle}
        onPress={handleGooleButtonPress}
      />
    </>
  )
}
