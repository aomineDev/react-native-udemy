import React from 'react'

import {
  facebookPermissions,
  loginUserWithFacebook,
  googlePermissions,
  loginUserWithGoogle
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
      const { type, token } = await facebookPermissions()

      if (type === 'success') {
        toggleAwaitRequest(true, 'facebook')
        await loginUserWithFacebook(token)
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
      const { type, idToken, accessToken } = await googlePermissions()

      if (type === 'success') {
        toggleAwaitRequest(true, 'google')
        await loginUserWithGoogle(idToken, accessToken)
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
